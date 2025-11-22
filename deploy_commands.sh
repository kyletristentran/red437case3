#!/bin/bash

# Create GitHub repository
gh repo create red437case3 --public --source=. --remote=origin

# Push code to GitHub
git push -u origin master

# Build and deploy to GitHub Pages
npm run deploy

echo "✅ Your app should be available at: https://kyletristentran.github.io/red437case3/"
echo "Note: It may take a few minutes for GitHub Pages to deploy your site."