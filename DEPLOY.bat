@echo off
echo ========================================
echo   Three Space Shine - Deployment
echo ========================================
echo.

echo Step 1: Building the React application...
cd client
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)
cd ..

echo.
echo Step 2: Build completed successfully!
echo.
echo ========================================
echo   DEPLOYMENT INSTRUCTIONS
echo ========================================
echo.
echo Your app is ready to deploy!
echo.
echo OPTION 1 - Deploy Frontend (Netlify):
echo   1. Go to https://app.netlify.com
echo   2. Click "Add new site" ^> "Deploy manually"
echo   3. Drag and drop the "client\build" folder
echo   4. Your site will be live in seconds!
echo.
echo OPTION 2 - Deploy Backend (Render):
echo   1. Go to https://dashboard.render.com
echo   2. Click "New +" ^> "Web Service"
echo   3. Connect your GitHub repo or use "Deploy from Git"
echo   4. Use these settings:
echo      - Build Command: npm install
echo      - Start Command: node server/index.js
echo      - Add environment variables from .env.example
echo.
echo OPTION 3 - Use Netlify CLI (if installed):
echo   netlify deploy --prod --dir=client/build
echo.
echo ========================================
echo.
echo Build folder location: %cd%\client\build
echo.
pause
