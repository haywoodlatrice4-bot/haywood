# Deploy ThreeSpaceShine Backend to Render

## 🚀 Quick Deploy to Render

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub first**:
   ```cmd
   cd c:\Users\USER\CascadeProjects\ThreeSpaceShine
   git init
   git add .
   git commit -m "Initial commit - ThreeSpaceShine"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ThreeSpaceShine.git
   git push -u origin main
   ```

2. **Deploy on Render**:
   - Go to: https://dashboard.render.com
   - Click **New +** → **Web Service**
   - Click **Connect GitHub** and authorize
   - Select your **ThreeSpaceShine** repository
   - Configure:
     - **Name**: `threespacshine-api`
     - **Region**: Choose closest to you
     - **Branch**: `main`
     - **Root Directory**: Leave empty
     - **Runtime**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `node server/index.js`
   - Click **Advanced** and add environment variables (see below)
   - Click **Create Web Service**

### Option 2: Deploy from Local (Manual)

If you don't want to use GitHub:

1. **Install Render CLI**:
   ```cmd
   npm install -g render-cli
   ```

2. **Login to Render**:
   ```cmd
   render login
   ```

3. **Deploy**:
   ```cmd
   cd c:\Users\USER\CascadeProjects\ThreeSpaceShine
   render deploy
   ```

---

## 🔧 Required Environment Variables

Add these in Render Dashboard → Your Service → Environment:

```
NODE_ENV=production
PORT=10000
JWT_SECRET=threespacshine-super-secret-jwt-key-change-in-production-2026
ADMIN_EMAIL=haywoodlatrice4@gmail.com
ADMIN_PASSWORD=Admin123!
CLIENT_URL=https://threespacshine.netlify.app
DATABASE_URL=postgresql://user:password@host:5432/database
```

**Important**: You MUST add a `DATABASE_URL` - see database setup below.

---

## 🗄️ Database Setup (REQUIRED)

Your backend needs a PostgreSQL database. Choose one:

### Option A: Render PostgreSQL (Free)

1. In Render Dashboard, click **New +** → **PostgreSQL**
2. Name: `threespacshine-db`
3. Database: `threespacshine`
4. User: `threespacshine`
5. Region: Same as your web service
6. Plan: **Free**
7. Click **Create Database**
8. Wait for it to provision (~2 minutes)
9. Copy the **Internal Database URL**
10. Go to your web service → Environment
11. Add variable: `DATABASE_URL` = [paste the URL]
12. Save changes (service will redeploy)

### Option B: Supabase (Free, Easier)

1. Go to: https://supabase.com
2. Sign up / Login
3. Click **New Project**
4. Name: `threespacshine`
5. Database Password: Create a strong password
6. Region: Choose closest to you
7. Click **Create new project** (takes ~2 minutes)
8. Go to **Settings** → **Database**
9. Scroll to **Connection string** → **URI**
10. Copy the connection string
11. Replace `[YOUR-PASSWORD]` with your database password
12. Add to Render environment as `DATABASE_URL`

---

## 📋 Complete Render Configuration

Here's your complete `render.yaml` file (already created):

```yaml
services:
  - type: web
    name: threespacshine-api
    env: node
    buildCommand: npm install
    startCommand: node server/index.js
    envVars:
      - key: NODE_ENV
        value: production
      - key: JWT_SECRET
        generateValue: true
      - key: PORT
        value: 10000
      - key: ADMIN_EMAIL
        value: haywoodlatrice4@gmail.com
      - key: ADMIN_PASSWORD
        value: Admin123!
      - key: CLIENT_URL
        value: https://threespacshine.netlify.app
      - key: DATABASE_URL
        sync: false
```

---

## ✅ Verify Deployment

After deployment completes:

1. **Check Service URL**:
   - Render will give you a URL like: `https://threespacshine-api.onrender.com`

2. **Test Health Endpoint**:
   - Visit: `https://your-service-url.onrender.com/api/health`
   - Should return: `{"status":"ok","message":"Three Space Shine API is running"}`

3. **Check Logs**:
   - In Render Dashboard → Your Service → Logs
   - Should see: "🚀 Three Space Shine API running on port 10000"

---

## 🔄 Update Frontend to Use New Backend

After your backend is deployed:

1. **Get your Render URL** (e.g., `https://threespacshine-api.onrender.com`)

2. **Update frontend config**:
   - Edit: `client/src/config.js`
   - Change to: `const API_URL = 'https://threespacshine-api.onrender.com/api';`

3. **Update netlify.toml**:
   - Edit the redirects section
   - Change backend URL to your new Render URL

4. **Rebuild and redeploy frontend**:
   ```cmd
   cd client
   npm run build
   ```
   Then upload to Netlify again.

---

## 🐛 Troubleshooting

### Build Fails
- Check logs in Render Dashboard
- Verify all dependencies are in `package.json`
- Ensure Node version is compatible (18+)

### Service Crashes
- Check environment variables are set
- Verify DATABASE_URL is correct
- Review logs for error messages

### Database Connection Fails
- Verify DATABASE_URL format is correct
- Check database is running
- Ensure Render service can access database

### 404 Errors
- Verify routes are correct (`/api/health`, not `/health`)
- Check server is listening on correct PORT
- Review server logs

---

## 🎯 Alternative: Use Existing Backend

If you already have a Render backend at `https://haywood.onrender.com`:

1. **Update that service**:
   - Go to Render Dashboard
   - Find the `haywood` service
   - Update the repository or code
   - Add ThreeSpaceShine environment variables
   - Redeploy

2. **Or create a new service** for ThreeSpaceShine separately

---

## 📱 After Successful Deployment

Your live URLs will be:

- **Backend API**: `https://threespacshine-api.onrender.com`
- **Health Check**: `https://threespacshine-api.onrender.com/api/health`
- **Frontend**: `https://threespacshine.netlify.app` (deploy separately)
- **Admin Panel**: `https://threespacshine.netlify.app/admin`

**Admin Login**:
- Email: `haywoodlatrice4@gmail.com`
- Password: `Admin123!`

---

## 🚨 Important Notes

1. **Free Tier Limitations**:
   - Render free tier spins down after 15 minutes of inactivity
   - First request after spin-down takes ~30 seconds
   - Upgrade to paid plan ($7/month) for always-on service

2. **Database Initialization**:
   - After first deployment, initialize database:
   - Run: `node server/config/setup-db.js` locally with production DATABASE_URL
   - Or add initialization to your startup script

3. **Security**:
   - Change `ADMIN_PASSWORD` after first login
   - Use strong `JWT_SECRET` (32+ characters)
   - Never commit `.env` files to GitHub

---

**Ready to deploy? Follow Option 1 or Option 2 above!** 🚀
