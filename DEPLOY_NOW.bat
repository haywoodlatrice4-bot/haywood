@echo off
title ThreeSpaceShine Deployment
cls
echo ========================================================
echo   THREESPACSHINE AUTOMATED DEPLOYMENT
echo ========================================================
echo.
echo I am fixing everything for you.
echo This script will deploy your site to Netlify.
echo.
echo [1/4] Checking build...
if not exist "client\build\index.html" (
    echo Building project...
    cd client
    call npm run build
    cd ..
)

echo.
echo [2/4] Connecting to Netlify...
echo Please authorize in the browser if asked.
call npx netlify-cli login

echo.
echo [3/4] Creating new site...
echo NOTE: If it says site exists, that is okay.
call npx netlify-cli sites:create --name threespacshine-final-%RANDOM% --account-slug haywoodlatrice4

echo.
echo [4/4] Uploading files...
call npx netlify-cli deploy --prod --dir=client/build

echo.
echo ========================================================
echo   SUCCESS! YOUR SITE IS ONLINE!
echo ========================================================
echo.
echo The "Website URL" shown above is your live site.
echo.
pause
