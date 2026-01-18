# 🚀 Manual Deployment Steps - ThreeSpaceShine

Since PowerShell scripts are blocked, follow these manual steps to deploy your site online.

---

## ✅ EASIEST METHOD: Vercel Dashboard (No CLI needed)

### Step 1: Build Your Application

Open **Command Prompt** (Win + R, type `cmd`, press Enter):

```cmd
cd c:\Users\USER\CascadeProjects\ThreeSpaceShine\client
npm install
npm run build
```

Wait for build to complete (~2-3 minutes).

### Step 2: Deploy to Vercel

1. **Go to**: https://vercel.com/new
2. **Sign up/Login** (use email or GitHub)
3. **Choose deployment method**:

   **Option A - Upload Folder** (Easiest):
   - Click **"Browse"** or drag and drop
   - Select the entire folder: `c:\Users\USER\CascadeProjects\ThreeSpaceShine`
   - Click **Deploy**
   
   **Option B - Import from GitHub**:
   - First push to GitHub (see below)
   - Click **Import Git Repository**
   - Select your repository
   - Click **Deploy**

### Step 3: Configure Your Deployment

After upload, Vercel will ask:

1. **Project Name**: `threespacshine`
2. **Framework Preset**: Vercel will auto-detect (Create React App)
3. **Root Directory**: `./` (leave as is)
4. **Build Command**: `cd client && npm run build` (or leave default)
5. **Output Directory**: `client/build`

Click **Deploy** and wait (~2 minutes).

### Step 4: Add Environment Variables

Once deployed:

1. Go to your project dashboard
2. Click **Settings** → **Environment Variables**
3. Add these one by one:

```
Name: JWT_SECRET
Value: threespacshine-super-secret-jwt-key-change-in-production-2026

Name: ADMIN_EMAIL
Value: haywoodlatrice4@gmail.com

Name: ADMIN_PASSWORD
Value: Admin123!

Name: CLIENT_URL
Value: https://threespacshine.vercel.app

Name: REACT_APP_API_URL
Value: https://threespacshine.vercel.app/api

Name: NODE_ENV
Value: production
```

4. Click **Save** after each one

### Step 5: Setup Database

1. In your Vercel project, click **Storage** tab
2. Click **Create Database**
3. Select **Postgres**
4. Name: `threespacshine-db`
5. Region: Choose closest to you
6. Click **Create**
7. Wait for provisioning (~1 minute)
8. Vercel automatically adds `DATABASE_URL` to your environment ✅

### Step 6: Redeploy with New Settings

1. Go to **Deployments** tab
2. Click the three dots (...) on latest deployment
3. Click **Redeploy**
4. Wait for redeployment (~2 minutes)

---

## 🎉 YOUR SITE IS NOW LIVE!

**URLs:**
- **Website**: https://threespacshine.vercel.app
- **API Health**: https://threespacshine.vercel.app/api/health
- **Admin Panel**: https://threespacshine.vercel.app/admin

**Admin Login:**
- Email: `haywoodlatrice4@gmail.com`
- Password: `Admin123!`

---

## 📋 Alternative: Push to GitHub First

If you want automatic deployments on every code change:

### Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `ThreeSpaceShine`
3. Make it Public or Private
4. Click **Create repository**

### Step 2: Push Your Code

Open **Command Prompt**:

```cmd
cd c:\Users\USER\CascadeProjects\ThreeSpaceShine
git init
git add .
git commit -m "Initial commit - ThreeSpaceShine detailing service"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ThreeSpaceShine.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Import to Vercel

1. Go to: https://vercel.com/new
2. Click **Import Git Repository**
3. Authorize Vercel to access GitHub
4. Select **ThreeSpaceShine** repository
5. Configure settings (same as above)
6. Click **Deploy**

**Benefit**: Every time you push to GitHub, Vercel auto-deploys! 🎯

---

## 🔧 Troubleshooting

### Build Fails
- Check that `client/package.json` exists
- Verify all dependencies are installed
- Review build logs in Vercel dashboard

### Can't Access npm Commands
- Make sure you're using **Command Prompt** (not PowerShell)
- Try: `where npm` to verify npm is installed
- Reinstall Node.js if needed

### Database Connection Fails
- Verify Vercel Postgres is created
- Check that DATABASE_URL is in environment variables
- Wait a few minutes for database to fully provision

### Admin Login Doesn't Work
- Verify environment variables are set correctly
- Check that database is initialized
- Review function logs in Vercel dashboard

---

## 🎯 Quick Checklist

- [ ] Build client application (`npm run build`)
- [ ] Sign up for Vercel account
- [ ] Upload project to Vercel (drag & drop or GitHub)
- [ ] Add all environment variables
- [ ] Create Vercel Postgres database
- [ ] Redeploy with new settings
- [ ] Test website loads
- [ ] Test API endpoint
- [ ] Test admin login
- [ ] Change admin password after first login

---

## 📞 Need Help?

If you get stuck at any step:

1. **Check Vercel Logs**: Dashboard → Your Project → Deployments → View Function Logs
2. **Vercel Docs**: https://vercel.com/docs
3. **Vercel Support**: https://vercel.com/support

---

## 🌟 What You Get

✅ **Live Website** - Professional detailing service site
✅ **Online Booking** - Customers can book services 24/7
✅ **Admin Dashboard** - Manage bookings, customers, gallery, reviews
✅ **Automatic HTTPS** - Secure SSL certificate included
✅ **Global CDN** - Fast loading worldwide
✅ **Auto Scaling** - Handles traffic spikes
✅ **Free Hosting** - Vercel free tier is generous

---

## 🚀 Start Now!

**Fastest Path**:
1. Open Command Prompt
2. Run: `cd c:\Users\USER\CascadeProjects\ThreeSpaceShine\client && npm install && npm run build`
3. Go to: https://vercel.com/new
4. Upload your project folder
5. Add environment variables
6. Create database
7. Done! 🎉

**Your business will be online in 10 minutes!**
