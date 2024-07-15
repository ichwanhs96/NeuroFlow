# Requirements
This project is using [`stramlit`](https://streamlit.io/) as it's main framework, additionally you need to have
1. python >=v3.10

# Setup
## Virtual Env
This project uses [virtual env](https://docs.python.org/3/library/venv.html) as it's working environment, follow these steps to setup your virtual env

go to `/streamlit` folder and initialize your virtual env by running 
```
python -m venv venv
```

once virtual env configured, activate the virtual env
```
source venv/bin/activate
```

if the virtual env activated then you shall see `(venv)` in your terminal

## Installing lib
To install python lib, please use virtual env to prevent bloating your global python lib and causing unnecessary side effect in your otherp projects 

Once you are inside virtual environment, run
```
pip install -r requirements.txt
```

# How to run
Once all set up done, to run this project simply do
```
streamlit run demo.py
```
then the application should run locally