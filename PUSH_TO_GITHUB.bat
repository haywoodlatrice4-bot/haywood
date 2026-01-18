@echo off
echo ========================================
echo   Push ThreeSpaceShine to GitHub
echo ========================================
echo.

echo Repository: https://github.com/haywoodlatrice4-bot/haywood.git
echo.
echo You need to authenticate with GitHub.
echo.
echo OPTION 1: Use GitHub Desktop (Easiest)
echo -----------------------------------------
echo 1. Download GitHub Desktop from: https://desktop.github.com
echo 2. Login with haywoodlatrice4-bot account
echo 3. Add this repository
echo 4. Commit and push
echo.
echo OPTION 2: Use Personal Access Token
echo -----------------------------------------
echo 1. Go to: https://github.com/settings/tokens
echo 2. Login as haywoodlatrice4-bot
echo 3. Click "Generate new token (classic)"
echo 4. Select "repo" scope
echo 5. Copy the token
echo 6. Run this command:
echo.
echo    git push https://YOUR_TOKEN@github.com/haywoodlatrice4-bot/haywood.git main
echo.
echo Replace YOUR_TOKEN with the token you copied
echo.
echo OPTION 3: Change GitHub Account
echo -----------------------------------------
echo Run these commands:
echo.
echo    git config --global user.name "haywoodlatrice4-bot"
echo    git config --global user.email "haywoodlatrice4@gmail.com"
echo    git push -u origin main
echo.
echo Then enter haywoodlatrice4-bot credentials when prompted
echo.
echo ========================================
pause
