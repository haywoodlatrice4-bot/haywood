# Three Space Shine - Admin Guide

## 🔐 Admin Access

### Login Credentials
```
Email: admin@threespacshine.com
Password: Admin123!
```

**⚠️ IMPORTANT:** Change these credentials in production!

## 📊 Admin Dashboard Features

### 1. Dashboard (`/admin`)
- **Overview Statistics**
  - Total bookings count
  - Pending bookings requiring attention
  - Completed bookings
  - Total revenue generated
  - Today's bookings

- **Recent Bookings Table**
  - View latest 10 bookings
  - Quick actions: Confirm, Cancel, Complete
  - Customer details at a glance

- **Quick Action Cards**
  - Navigate to Bookings, Customers, or Gallery

### 2. Bookings Management (`/admin/bookings`)
- **Search & Filter**
  - Search by customer name, email, or service
  - Filter by status (Pending, Confirmed, Completed, Cancelled)
  - Filter by service type (Car, House, Office)

- **Booking Actions**
  - **Pending → Confirmed**: Approve booking
  - **Confirmed → Completed**: Mark service as done
  - **Pending → Cancelled**: Reject booking

- **Export Data**
  - Download all bookings as CSV
  - Includes customer info, service details, pricing

### 3. Customer Database (`/admin/customers`)
- **Customer Information**
  - Name, email, phone number
  - Total bookings count
  - Total amount spent
  - Member since date

- **Search Functionality**
  - Find customers by name, email, or phone

- **Statistics**
  - Total customers
  - Active customers this month
  - Total revenue from all customers

### 4. Gallery Management (`/admin/gallery`)
- **Upload Photos**
  - Drag & drop or click to upload
  - Support for multiple images
  - Categorize by service type (Car, House, Office)

- **Manage Photos**
  - View all uploaded images
  - Filter by category
  - Delete unwanted photos
  - Hover to see delete button

- **Gallery Stats**
  - Total photos count
  - Photos per category

### 5. Reviews Management (`/admin/reviews`)
- **Review Moderation**
  - Approve/Unapprove reviews
  - Delete inappropriate reviews
  - View customer ratings (1-5 stars)

- **Filter Reviews**
  - All reviews
  - Approved only
  - Pending approval

- **Review Statistics**
  - Total reviews count
  - Average rating
  - Approved vs pending count

## 🎯 Common Admin Tasks

### Handling New Bookings
1. Go to Dashboard or Bookings page
2. Find pending bookings (yellow badge)
3. Review customer and service details
4. Click ✓ to confirm or ✗ to cancel
5. Customer receives notification (if email configured)

### Completing a Service
1. Go to Bookings page
2. Find confirmed booking (green badge)
3. Click "Mark Complete"
4. Booking moves to completed status

### Managing Customer Reviews
1. Go to Reviews page
2. Check pending reviews
3. Read review content
4. Approve if appropriate
5. Delete if spam/inappropriate

### Updating Gallery
1. Go to Gallery page
2. Select service category
3. Upload before/after photos
4. Photos appear on public gallery

## 📱 Mobile Access

The admin panel is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

On mobile, use the hamburger menu (☰) to access navigation.

## 🔒 Security Best Practices

1. **Change Default Password**
   - Update admin credentials immediately
   - Use strong password (12+ characters)

2. **Regular Monitoring**
   - Check pending bookings daily
   - Review new customer registrations
   - Monitor suspicious activity

3. **Data Backup**
   - Export bookings regularly
   - Keep customer data secure
   - Follow data protection regulations

## 🚀 Quick Tips

- **Keyboard Shortcuts**: Use Tab to navigate forms quickly
- **Bulk Actions**: Export data before making major changes
- **Customer Service**: Respond to bookings within 24 hours
- **Gallery Updates**: Add new photos weekly to keep content fresh
- **Review Management**: Approve genuine reviews to build trust

## 📞 Support

For technical issues or questions:
- Check `TROUBLESHOOT.md`
- Review `SETUP_GUIDE.md`
- Contact development team

---

**Happy Managing! 🌟**
