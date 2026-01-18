@echo off
echo ========================================
echo   Testing ThreeSpaceShine Locally
echo ========================================
echo.

echo Installing backend dependencies...
cd /d "%~dp0"
call npm install
if errorlevel 1 (
    echo ERROR: Backend installation failed
    echo Please make sure Node.js is installed
    pause
    exit /b 1
)

echo.
echo Installing frontend dependencies...
cd client
call npm install
if errorlevel 1 (
    echo ERROR: Frontend installation failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Starting ThreeSpaceShine
echo ========================================
echo.
echo Backend will start on: http://localhost:5000
echo Frontend will start on: http://localhost:3000
echo.
echo The app will open in your browser automatically.
echo.
echo Admin Panel: http://localhost:3000/admin
echo Login: haywoodlatrice4@gmail.com / Admin123!
echo.
echo Press Ctrl+C to stop the servers
echo ========================================
echo.

cd ..
call npm run dev
