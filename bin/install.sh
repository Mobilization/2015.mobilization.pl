#!/bin/bash

# create a new folder for the project
mkdir -p mobilization.pl
cd mobilization.pl

# clone master branch folder
git clone https://github.com/mobilization/2015.mobilization.pl.git

# create symbolic links 
ln -s bin/clean.sh 2015.mobilization.pl/clean.sh
ln -s bin/generate.sh 2015.mobilization.pl/generate.sh
ln -s bin/publish.sh 2015.mobilization.pl/publish.sh

# clone gh-pages branch folder
mkdir 2015.mobilization.pl-gh-pages
cd 2015.mobilization.pl-gh-pages
git clone https://github.com/mobilization/2015.mobilization.pl.git .
git checkout gh-pages

echo ""
echo "The mobilization.pl project has been installed successfully!"
echo "Please don't modify files in 2015.mobilization.pl-gh-pages manually."
echo "You can find some guidelines in mobilization.pl/2015.mobilization.pl/README.md file."
