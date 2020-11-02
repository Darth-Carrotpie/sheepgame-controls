#!/bin/bash
echo "running script to change entry name and move the files"
cd build
mv index.html contr.html
cd ..
cp -r build/* 'C:\Users\carro\Desktop\Unity\Sheep Game\Assets\WebGLTemplates\AirConsole-2020\'
mv --force 'C:\Users\carro\Desktop\Unity\Sheep Game\Assets\WebGLTemplates\AirConsole-2020\controller.html' 'C:\Users\carro\Desktop\Unity\Sheep Game\Assets\Scripts\Controller\controller.html'

# read -n 1 -s -r -p "Press any key to continue"
#npm config set script-shell "C:\\Users\\carro\\AppData\\Local\\Atlassian\\SourceTree\\git_local\\git-bash.exe"
