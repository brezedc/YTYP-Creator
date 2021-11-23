@ECHO OFF
SETLOCAL

set NULL_VAL=null
set NODE_VER=%NULL_VAL%
set NODE_EXEC=node-v16.13.0-x64.msi

node -v >.tmp_nodever
set /p NODE_VER=<.tmp_nodever
del .tmp_nodever

IF "%NODE_VER%"=="%NULL_VAL%" (
	echo.
	echo Node.js is not installed! Please press a key to download and install it from the website that will open.
	PAUSE
	start "" http://nodejs.org/dist/v16.13.0/%NODE_EXEC%
	echo After you have installed Node.js, press a key to shut down this process. The installer will then self delete
	PAUSE
    IF EXIST "src" START "" /D src call npm install
    DEL "%~f0"
	EXIT
) ELSE (
	echo Node.JS Is already installed ^(%NODE_VER%^) is installed. Proceeding...
    IF EXIST "src" START "" /D src call npm install
    DEL "%~f0"
    EXIT
)
