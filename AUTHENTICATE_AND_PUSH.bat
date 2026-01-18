@echo off
cls
echo ========================================
echo   PUSH THREESPACSHINE TO GITHUB
echo ========================================
echo.
echo Repository: https://github.com/haywoodlatrice4-bot/haywood.git
echo.
echo ========================================
echo   STEP 1: GET YOUR GITHUB TOKEN
echo ========================================
echo.
echo Opening GitHub token page in your browser...
echo.
start https://github.com/settings/tokens
echo.
echo In the browser that just opened:
echo 1. Click "Generate new token (classic)"
echo 2. Name: ThreeSpaceShine
echo 3. Check the "repo" box
echo 4. Click "Generate token"
echo 5. COPY the token (starts with ghp_)
echo.
echo ========================================
pause
echo.
echo ========================================
echo   STEP 2: ENTER YOUR TOKEN
echo ========================================
echo.
set /p token="Paste your GitHub token here and press Enter: "
echo.

if "%token%"=="" (
    echo ERROR: No token provided!
    echo Please run this script again and paste your token.
    pause
    exit /b 1
)

echo ========================================
echo   STEP 3: PUSHING TO GITHUB
echo ========================================
echo.
echo Pushing your code to GitHub...
echo This may take 1-2 minutes...
echo.

cd /d "%~dp0"
git push https://%token%@github.com/haywoodlatrice4-bot/haywood.git main --force

if errorlevel 1 (
    echo.
    echo ========================================
    echo   ERROR: PUSH FAILED
    echo ========================================
    echo.
    echo Possible reasons:
    echo - Token is incorrect
    echo - Token doesn't have "repo" permission
    echo - Network connection issue
    echo.
    echo Please try again:
    echo 1. Get a new token from: https://github.com/settings/tokens
    echo 2. Make sure to check "repo" box
    echo 3. Run this script again
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   SUCCESS! CODE IS ON GITHUB!
echo ========================================
echo.
echo Your code is now at:
echo https://github.com/haywoodlatrice4-bot/haywood
echo.
echo ========================================
echo   NEXT: DEPLOY TO VERCEL
echo ========================================
echo.
echo 1. Go to: https://vercel.com/new
echo 2. Click "Import Git Repository"
echo 3. Select: haywoodlatrice4-bot/haywood
echo 4. Click "Deploy"
echo 5. Wait 3 minutes
echo.
echo After deployment:
echo - Add environment variables (Settings)
echo - Create database (Storage - Postgres)
echo - Redeploy (Deployments)
echo.
echo Your site will be live at:
echo https://threespacshine.vercel.app
echo.
echo Opening Vercel in browser...
start https://vercel.com/new
echo.
pause
