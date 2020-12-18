from github import Github

# frst create a Github instance
# using username and password
# can also use access_token, or github enterprise with custom hostname
username = input("Enter your username inside quotation marks: ")
password = input("Enter your password inside quotation marks: ")
g = Github(username, password)

# can be used on other github ojects too, 

for repo in g.get_user().get_repos():
    print("Name of repository: " + repo.name)
    print("Programming Languages used: " + str(repo.language))
    # to see all the available attributes and methods
    print("Attributes: " + str(dir(repo)))

