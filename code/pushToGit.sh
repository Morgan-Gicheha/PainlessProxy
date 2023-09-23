#!/bin/bash

# Prompt the user for a commit message
read -p "Enter a commit message: " commit_message

# Add all changes to the Git staging area
git add .

# Commit the changes with the provided commit message
git commit -m "$commit_message"

# Push the changes to the remote repository
git push
