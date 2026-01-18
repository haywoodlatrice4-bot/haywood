@echo off
title Deploy ThreeSpaceShine
cls
echo ========================================================
echo   DEPLOYING THREESPACSHINE
echo ========================================================
echo.

cd client

echo Rebuilding...
call npm run build

echo.
echo Deploying to Netlify...
call npx netlify-cli deploy --prod --dir=build

echo.
echo ========================================================
echo   COPY THE URL ABOVE
echo ========================================================
echo.
echo Your site is live at the "Website URL" shown above.
echo.
pause
