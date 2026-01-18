@echo off
echo ========================================
echo   Three Space Shine - Starting App
echo ========================================
echo.

echo Checking if dependencies are installed...
if not exist "node_modules" (
    echo Installing server dependencies...
    call npm install
)

if not exist "client\node_modules" (
    echo Installing client dependencies...
    cd client
    call npm install
    cd ..
)

echo.
echo Starting Three Space Shine...
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:5000
echo.
echo Admin Login:
echo Email: admin@threespacshine.com
echo Password: Admin123!
echo.

npm run dev
