# ThreeSpaceShine - Admin Login Information

## 🔐 Current Admin Credentials

Your admin account is already configured in the system:

**Admin Email**: `haywoodlatrice4@gmail.com`
**Admin Password**: `Admin123!`

These credentials are set in your environment variables and will be created automatically when the database is initialized.

---

## 🌐 How to Access Admin Panel

### Once Your Site is Deployed:

**Admin Panel URL**: `https://your-site-url.netlify.app/admin`

**Login Steps**:
1. Go to the admin URL
2. Enter email: `haywoodlatrice4@gmail.com`
3. Enter password: `Admin123!`
4. Click "Login"

---

## 🎯 Admin Panel Features

Once logged in, you can:

- **Dashboard**: View analytics, bookings, revenue
- **Manage Bookings**: Approve, confirm, complete bookings
- **Customer Database**: View all customers and their history
- **Gallery Management**: Upload before/after photos
- **Review Moderation**: Approve or reject customer reviews
- **Service Management**: Update pricing and packages

---

## 👥 How to Create Additional Admin Accounts

### Method 1: Through Database (After Deployment)

1. Register a new user account on your site
2. Access your database (Netlify/Vercel dashboard)
3. Find the `users` table
4. Update the user's `role` field from `customer` to `admin`

### Method 2: Using Admin Panel (Future Feature)

You can add this feature to create admin accounts from the admin panel.

---

## 🔒 Security Recommendations

### After First Login:

1. **Change the default password**
   - Go to your profile settings
   - Update to a strong password

2. **Update environment variables**
   - Change `ADMIN_PASSWORD` in your deployment settings
   - Use a password with:
     - 12+ characters
     - Mix of uppercase, lowercase, numbers, symbols

3. **Secure your admin email**
   - Use a dedicated business email
   - Enable two-factor authentication on the email account

---

## 🛠️ Environment Variables for Admin

When deploying, set these environment variables:

```
ADMIN_EMAIL=haywoodlatrice4@gmail.com
ADMIN_PASSWORD=Admin123!
JWT_SECRET=threespacshine-secret-2026
```

**For production**, change to:
```
ADMIN_EMAIL=your-business-email@domain.com
ADMIN_PASSWORD=YourStrongPassword123!
JWT_SECRET=generate-a-random-32-character-string
```

---

## 📝 Admin Account Database Structure

The admin account is stored in the `users` table with:

```sql
email: haywoodlatrice4@gmail.com
password: (hashed with bcrypt)
role: admin
created_at: (timestamp)
```

---

## 🚀 Testing Admin Login Locally

Before deploying, you can test locally:

1. **Start the app**:
   ```cmd
   cd c:\Users\USER\CascadeProjects\ThreeSpaceShine
   npm run dev
   ```

2. **Access admin panel**:
   - Go to: http://localhost:3000/admin
   - Login with credentials above

3. **Test features**:
   - View dashboard
   - Create test bookings
   - Upload photos
   - Manage reviews

---

## 🔑 Password Reset (If Needed)

If you forget the admin password:

1. Access your database
2. Generate a new bcrypt hash for your password
3. Update the `password` field in the `users` table
4. Or update `ADMIN_PASSWORD` environment variable and restart

---

## 📊 Admin Roles

Current role system:

- **admin**: Full access to all features
- **customer**: Can book services and view their bookings

You can extend this to add more roles like:
- **staff**: Limited admin access
- **manager**: Partial admin access

---

## ✅ Current Setup Status

- ✅ Admin credentials configured
- ✅ Admin routes created
- ✅ Admin dashboard built
- ✅ Authentication system ready
- ✅ Role-based access control implemented
- ⏳ Waiting for deployment to test

---

## 🎉 After Deployment

Once your site is live:

1. Visit the admin panel URL
2. Login with your credentials
3. Start managing your detailing business!
4. Change the default password immediately

---

**Your admin system is fully configured and ready to use once the site is deployed!**
