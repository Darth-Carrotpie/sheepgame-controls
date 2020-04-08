#!/bin/bash
echo "running script to change entry name and move the files"
cd build
mv index.html controller.html
cd ..
cp -r build/* 'C:\Users\carro\Documents\Unity Projects\Sheep Game\Assets\WebGLTemplates\AirConsole\'
mv --force 'C:\Users\carro\Documents\Unity Projects\Sheep Game\Assets\WebGLTemplates\AirConsole\controller.html' 'C:\Users\carro\Documents\Unity Projects\Sheep Game\Assets\Scripts\Controller\controller.html'
# read -n 1 -s -r -p "Press any key to continue"
#npm config set script-shell "C:\\Users\\carro\\AppData\\Local\\Atlassian\\SourceTree\\git_local\\git-bash.exe"
