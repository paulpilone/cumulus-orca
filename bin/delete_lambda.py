import subprocess
import json

# Gets user input for the prefix of ORCA lambdas to delete
prefix = input("Enter Prefix: ")

# Gets AWS Profile to use for ORCA lambda deletion
profile = input("Enter AWS Profile: ")

# Gets ORCA lambda functions with given prefix
get_functions = f"aws lambda list-functions --profile {profile} --query 'Functions[] | [?contains(FunctionName, `{prefix}`) == `true`]'"
completed_process = subprocess.run(get_functions, shell=True, capture_output=True)
output = completed_process.stdout
convert = json.loads(output.decode("utf-8").replace("'","'"))

for sub in convert:
    lambda_output = sub['FunctionArn']
    get_tags = f"aws lambda list-tags --profile {profile} --resource {lambda_output}"
    tags_process = subprocess.run(get_tags, shell=True, capture_output=True)
    tag_output = tags_process.stdout
    tag_convert = json.loads(tag_output.decode("utf-8").replace("'","'"))
    try:
        # Finds lambdas with the tag application set to ORCA and deletes the ORCA Lambdas
        for tag in tag_convert:
            if tag_convert[tag]['application'] == 'ORCA':
                print("Deleting " + sub['FunctionName'])
                del_lambda = sub['FunctionName']
                delete_function = f"aws lambda delete-function --profile {profile} --function-name {del_lambda}"
                subprocess.run(delete_function, shell=True, capture_output=True)
    # If the lambda with the provided prefix does not match the tag for deletion it is skipped and is not deleted
    except KeyError:
        pass
