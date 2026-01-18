@echo off
echo ========================================
echo   DEPLOYING THREESPACSHINE ONLINE
echo ========================================
echo.

echo Step 1: Installing Vercel CLI...
call npm install -g vercel
if errorlevel 1 (
    echo ERROR: Failed to install Vercel CLI
    echo.
    echo ALTERNATIVE: Manual deployment
    echo 1. Go to https://vercel.com/new
    echo 2. Sign up/login
    echo 3. Drag and drop this folder
    echo 4. Click Deploy
    pause
    exit /b 1
)

echo.
echo Step 2: Logging into Vercel...
echo A browser window will open for login...
call vercel login
if errorlevel 1 (
    echo ERROR: Login failed
    pause
    exit /b 1
)

echo.
echo Step 3: Deploying to production...
call vercel --prod --yes
if errorlevel 1 (
    echo ERROR: Deployment failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo   DEPLOYMENT SUCCESSFUL!
echo ========================================
echo.
echo Your site is now LIVE!
echo.
echo Next steps in browser:
echo 1. Go to https://vercel.com/dashboard
echo 2. Click your threespacshine project
echo 3. Go to Settings - Environment Variables
echo 4. Add these variables:
echo.
echo    JWT_SECRET = threespacshine-secret-2026
echo    ADMIN_EMAIL = haywoodlatrice4@gmail.com
echo    ADMIN_PASSWORD = Admin123!
echo    CLIENT_URL = https://threespacshine.vercel.app
echo    REACT_APP_API_URL = https://threespacshine.vercel.app/api
echo    NODE_ENV = production
echo.
echo 5. Go to Storage tab
echo 6. Create Database - Postgres
echo 7. Name: threespacshine-db
echo 8. Go to Deployments and Redeploy
echo.
echo Your live site: https://threespacshine.vercel.app
echo Admin panel: https://threespacshine.vercel.app/admin
echo.
pause
