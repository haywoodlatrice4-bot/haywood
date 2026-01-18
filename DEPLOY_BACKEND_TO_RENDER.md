# 🚀 Deploy Backend to Render - Complete Guide

## Step 1: Set Up Database in Neon

1. Go to https://console.neon.tech
2. Sign in and select your project
3. Click "SQL Editor" in the left sidebar
4. Open the file `database-setup.sql` from your ThreeSpaceShine folder
5. Copy ALL the content and paste it into the SQL Editor
6. Click "Run" to create all tables and insert initial data
7. You should see "Database setup complete!" message

## Step 2: Deploy Backend to Render

1. Go to https://render.com
2. Sign up or log in (use GitHub to sign in)
3. Click "New +" button → Select "Web Service"
4. Connect your GitHub account if not already connected
5. Select repository: `haywoodlatrice4-bot/haywood`
6. Click "Connect"

### Configuration:
- **Name**: `threespacshine-api`
- **Region**: Choose closest to you (US East recommended)
- **Branch**: `main`
- **Root Directory**: Leave empty (or put `server` if it asks)
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `node server/index.js`

### Environment Variables (Click "Advanced" → "Add Environment Variable"):

Add these one by one:

```
NODE_ENV = production
JWT_SECRET = your-super-secret-jwt-key-12345
PORT = 10000
ADMIN_EMAIL = haywoodlatrice4@gmail.com
ADMIN_PASSWORD = Admin123!
CLIENT_URL = https://threespacshine-production.netlify.app
DATABASE_URL = postgresql://neondb_owner:npg_Qab2v0WTBXue@ep-lucky-king-ae48anz8-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require
BUSINESS_NAME = Three Space Shine
BUSINESS_EMAIL = info@threespacshine.com
BUSINESS_ADDRESS = Indianapolis, Indiana
```

7. Click "Create Web Service"
8. Wait 5-10 minutes for deployment to complete
9. Once deployed, you'll get a URL like: `https://threespacshine-api.onrender.com`

## Step 3: Update Frontend API URL

After backend is deployed, you need to update the frontend to use the new backend URL.

I'll need to update the file: `client/src/utils/api.js`

**Your backend URL will be**: `https://threespacshine-api.onrender.com/api`

## Step 4: Test Everything

Once both steps are done:
1. Go to your website: https://threespacshine-production.netlify.app
2. Try to register a new account
3. Try to login
4. Try to get a quote
5. Try to book a service

---

## ⚠️ IMPORTANT NOTES

- **Free Render Plan**: Backend will sleep after 15 minutes of inactivity. First request after sleep takes 30-60 seconds to wake up.
- **Database**: Your Neon database is already connected and ready to use.
- **Admin Access**: Login with `haywoodlatrice4@gmail.com` / `Admin123!`

---

## 🆘 If You Need Help

Let me know at which step you are and I'll guide you through!
