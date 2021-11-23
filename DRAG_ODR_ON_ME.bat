@ECHO OFF

SET mypath=%~dp0

IF [%1] == [] (
    ECHO "You need to drag and drop atleast one file"
    PAUSE
) else (
    node %~dp0/src/index.js %*
)
