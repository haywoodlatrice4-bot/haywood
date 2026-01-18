@echo off
echo ========================================
echo   PUSH TO GITHUB - ONE COMMAND
echo ========================================
echo.
echo You need a GitHub token first.
echo.
echo 1. Go to: https://github.com/settings/tokens
echo 2. Click "Generate new token (classic)"
echo 3. Check "repo" box
echo 4. Click "Generate token"
echo 5. Copy the token
echo.
echo Then run this command:
echo.
echo git push https://YOUR_TOKEN@github.com/haywoodlatrice4-bot/haywood.git main
echo.
echo Replace YOUR_TOKEN with your actual token.
echo.
echo ========================================
echo.
set /p token="Paste your GitHub token here and press Enter: "

if "%token%"=="" (
    echo ERROR: No token provided
    pause
    exit /b 1
)

echo.
echo Pushing to GitHub...
git push https://%token%@github.com/haywoodlatrice4-bot/haywood.git main

if errorlevel 1 (
    echo.
    echo ERROR: Push failed
    echo Check your token and try again
    pause
    exit /b 1
)

echo.
echo ========================================
echo   SUCCESS! CODE IS ON GITHUB
echo ========================================
echo.
echo Now deploy to Vercel:
echo 1. Go to: https://vercel.com/new
echo 2. Click "Import Git Repository"
echo 3. Select: haywoodlatrice4-bot/haywood
echo 4. Click "Deploy"
echo.
pause
