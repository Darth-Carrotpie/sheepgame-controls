#!/bin/bash
echo "running script to change entry name and move the files"
cd build
mv index.html contr.html
cd ..
cp -r build unity-build-directory
