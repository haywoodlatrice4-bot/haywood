@echo off
echo Opening Railway to deploy your Backend and Database...
start "" "https://railway.app/new?template=https://github.com/haywoodlatrice4-bot/haywood&envs.JWT_SECRET=threespacshine-secret-2026&envs.ADMIN_EMAIL=haywoodlatrice4%%40gmail.com&envs.ADMIN_PASSWORD=Admin123%%21&envs.NODE_ENV=production&envs.PORT=5000&optionalEnvs=DATABASE_URL"
echo.
echo 1. Login with GitHub if asked.
echo 2. Click "Deploy Now".
echo 3. Wait for it to finish.
echo 4. Go to Settings -> Networking -> Generate Domain.
echo 5. Copy that domain and put it in Netlify.
pause
