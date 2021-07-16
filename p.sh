#! /bin/sh

git pull https://github.com/anandpratiksha/Movie_Ratings_app.git
git status 
git add .
git status 
git remote add origin https://github.com/anandpratiksha/Movie_Ratings_app.git
git commit -m "updates"
git push -u origin master 