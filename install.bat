@ECHO OFF
SETLOCAL

IF EXIST "src" START "" /D src call npm install
DEL "%~f0"