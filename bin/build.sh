#!/usr/bin/env bash
node -v
npm -v
gulp -v

echo "installing npm dependencies"
rm -rf node_modules > /dev/null 2>&1
npm cache clean

npm install

file_name="../bower.json"
if [ -e "$file_name" ]
then
  echo "installing bower dependencies"
  rm -rf bower_components > /dev/null 2>&1
  bower cache clean

  bower install
fi

echo "running build task"
gulp build
