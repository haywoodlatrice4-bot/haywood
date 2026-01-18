@echo off
title ThreeSpaceShine - Full Deployment (Frontend + Backend)
cls
echo ========================================================
echo   DEPLOYING BOTH FRONTEND AND BACKEND TO NETLIFY
echo ========================================================
echo.
echo This will deploy:
echo [1] Frontend (React Website) 
echo [2] Backend (Node.js API Server)
echo.
echo Both will be live on Netlify!
echo.
pause

echo.
echo ========================================================
echo   STEP 1: DEPLOYING FRONTEND
echo ========================================================
echo.

cd client

echo Building frontend...
call npm run build

echo.
echo Deploying frontend to Netlify...
call npx netlify-cli deploy --prod --dir=build

echo.
echo Frontend deployment complete!
echo Copy the "Website URL" shown above.
echo.
set /p FRONTEND_URL="Paste the Frontend URL here: "

cd ..

echo.
echo ========================================================
echo   STEP 2: DEPLOYING BACKEND
echo ========================================================
echo.

echo Creating package.json for backend deployment...
cd server

echo Deploying backend to Netlify...
call npx netlify-cli deploy --prod --dir=.

echo.
echo Backend deployment complete!
echo Copy the "Website URL" shown above.
echo.
set /p BACKEND_URL="Paste the Backend URL here: "

cd ..

echo.
echo ========================================================
echo   DEPLOYMENT COMPLETE!
echo ========================================================
echo.
echo Frontend URL: %FRONTEND_URL%
echo Backend URL: %BACKEND_URL%
echo.
echo IMPORTANT NEXT STEPS:
echo 1. Go to Netlify dashboard for your FRONTEND site
echo 2. Add Environment Variable:
echo    REACT_APP_API_URL = %BACKEND_URL%/api
echo 3. Redeploy the frontend
echo.
echo Your site will then be fully functional!
echo.
pause
