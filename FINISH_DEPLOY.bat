@echo off
cd /d "%~dp0"
echo ===================================================
echo   FINAL DEPLOYMENT STEP
echo ===================================================
echo.
echo This script will:
echo 1. Create your site on Netlify
echo 2. Upload the finished website
echo.
echo NOTE: If asked to "Link to an existing site", choose "Create & configure a new site".
echo.
echo Starting deployment...
echo.

:: Try to create the site non-interactively first to save time
call npx netlify-cli sites:create --name threespacshine-final-deploy --account-slug haywoodlatrice4

:: Deploy the build folder to production
echo.
echo Uploading files...
call npx netlify-cli deploy --prod --dir=client/build

echo.
echo ===================================================
echo   DEPLOYMENT COMPLETE!
echo ===================================================
echo.
echo Look for the "Website URL" in the output above.
echo that is your live site!
echo.
pause
