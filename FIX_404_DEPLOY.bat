@echo off
title Fix 404 Error - Redeploy ThreeSpaceShine
cls
echo ========================================================
echo   FIXING 404 ERROR - REDEPLOYING CORRECTLY
echo ========================================================
echo.
echo The 404 error happened because files were deployed incorrectly.
echo This script will fix it by deploying from the correct location.
echo.
pause

echo.
echo [1/3] Rebuilding frontend...
cd client
call npm run build

echo.
echo [2/3] Deploying to Netlify (from correct directory)...
call npx netlify-cli deploy --prod --dir=build --site=threespacshine-production

echo.
echo [3/3] Done!
echo.
echo ========================================================
echo   DEPLOYMENT FIXED!
echo ========================================================
echo.
echo Your site should now work at:
echo https://threespacshine-production.netlify.app
echo.
echo If you still see 404, wait 1-2 minutes for DNS to update.
echo.
pause
