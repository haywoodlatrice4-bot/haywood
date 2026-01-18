@echo off
echo ========================================
echo   ThreeSpaceShine - Vercel Deployment
echo ========================================
echo.

echo Step 1: Installing Vercel CLI...
call npm install -g vercel
if errorlevel 1 (
    echo ERROR: Failed to install Vercel CLI
    echo Please run this in Command Prompt (not PowerShell)
    pause
    exit /b 1
)

echo.
echo Step 2: Logging into Vercel...
echo Please follow the browser login prompts...
call vercel login

echo.
echo Step 3: Deploying to production...
call vercel --prod

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your site is now live!
echo.
echo Next steps:
echo 1. Go to https://vercel.com/dashboard
echo 2. Click on your threespacshine project
echo 3. Go to Settings - Environment Variables
echo 4. Add the required environment variables (see below)
echo 5. Go to Storage tab and create a Postgres database
echo.
echo Required Environment Variables:
echo   JWT_SECRET=threespacshine-secret-2026
echo   ADMIN_EMAIL=haywoodlatrice4@gmail.com
echo   ADMIN_PASSWORD=Admin123!
echo   CLIENT_URL=https://threespacshine.vercel.app
echo   REACT_APP_API_URL=https://threespacshine.vercel.app/api
echo.
echo After adding variables, redeploy with: vercel --prod
echo.
pause
