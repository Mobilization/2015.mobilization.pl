## How to install 2015.mobilization.pl locally

Here https://raw.githubusercontent.com/mobilization5/2015.mobilization.pl/master/bin/install.sh you can find a simple script to install both src (docpad) & out (html) projects.

Download and run the install.sh script.
```
wget https://raw.githubusercontent.com/mobilization5/2015.mobilization.pl/master/bin/install.sh
./install.sh
``` 

The script will pull the project and put into the following structure:

`mobilization.pl/2015.mobilization.pl` - for master branch (src project)
`mobilization.pl/2015.mobilization.pl-gh-pages` - for gh-pages branch (out project)

In most of cases you won't need to update 2015.mobilization.pl-gh-pages, docpad will do it for you.

## How to run the page locally

```
cd mobilization.pl/2015.mobilization.pl
docpad run
```

## How to push changes to gh-pages branch (production)

In `mobilization.pl/2015.mobilization.pl/bin` you will find few scripts simplifying publishing process. Please run the scripts via symbolic links in `mobilization.pl/2015.mobilization.pl`.

- `./clean.sh` - Clean up the out folder and sync with remote repository.
- `./generate.sh` - Re-generate the out files.
- `./publish.sh` - Commit the out files and push to remote.


