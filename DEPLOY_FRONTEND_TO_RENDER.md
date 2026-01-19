# Deploy Frontend to Render - Step by Step Guide

## Why Deploy Frontend to Render?
- Both frontend and backend on same platform
- Easier to manage
- No Netlify cache issues
- Faster deployment

## Steps to Deploy

### 1. Go to Render Dashboard
Visit: https://dashboard.render.com

### 2. Create New Static Site
1. Click **"New +"** button (top right)
2. Select **"Static Site"**

### 3. Connect Repository
1. If not connected, click **"Connect GitHub"**
2. Find repository: **haywoodlatrice4-bot/haywood**
3. Click **"Connect"**

### 4. Configure Static Site
Fill in these settings:

**Name:** `threespacshine-frontend`

**Root Directory:** `client`

**Build Command:** `npm install && npm run build`

**Publish Directory:** `build`

**Environment Variables:** Click "Add Environment Variable"
- Key: `REACT_APP_API_URL`
- Value: `https://haywood123.onrender.com/api`

### 5. Advanced Settings (Important!)
Scroll down to "Redirects/Rewrites":
- Click **"Add Rule"**
- Source: `/*`
- Destination: `/index.html`
- Action: `Rewrite`

This makes React Router work properly.

### 6. Create Static Site
Click **"Create Static Site"** button at the bottom

### 7. Wait for Deployment
- Render will build and deploy (takes 3-5 minutes)
- Watch the logs for any errors
- When done, you'll see a URL like: `https://threespacshine-frontend.onrender.com`

### 8. Update Backend CORS
After frontend deploys, I need to add the new Render URL to backend CORS.

The new frontend URL will be something like:
`https://threespacshine-frontend.onrender.com`

I'll update the backend to allow this URL.

### 9. Test Everything
Once deployed:
1. Go to your new Render frontend URL
2. Test registration
3. Test login
4. Everything should work!

## Benefits
✅ No more Netlify cache issues
✅ Both services on same platform
✅ Easier to manage
✅ Automatic deployments from GitHub
✅ Free tier available

## Next Steps
After you create the static site on Render, tell me the URL it gives you, and I'll update the backend CORS to allow it.
