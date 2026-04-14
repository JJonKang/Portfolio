Creation:
Python version 3.13.3
Ubuntu 24.04.1 LTS
nvm 0.40.4
node v24.14.1 LTS

Initialized:
venv:
sudo apt install python3.12-venv
python3 -m venv .venv

vite:
npm install -g create-vite

create react app:
npm create vite@latest my-react-app -- --template react

Start up python virtual environment:
source .venv/bin/activate

After, start up website:
cd react-app
npm install (if you haven't installed dependencies yet)
npm run dev