@echo off
setlocal
title ArtSkin Local Preview

where node >nul 2>&1
if errorlevel 1 (
  echo.
  echo Node.js is not installed.
  echo Install Node.js 20 LTS from https://nodejs.org/ and run this file again.
  echo.
  pause
  exit /b 1
)

cd /d "%~dp0"

if not exist "node_modules" (
  echo Installing project dependencies...
  call npm install
  if errorlevel 1 (
    echo.
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

echo.
echo Starting ArtSkin at http://localhost:3000
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3000"
call npm run dev -- --host 127.0.0.1

