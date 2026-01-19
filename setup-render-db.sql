-- Three Space Shine Database Setup for Render PostgreSQL
-- Copy and paste this entire file into Render's database SQL console

-- Drop existing tables if they exist (clean slate)
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS bookings CASCADE;
DROP TABLE IF EXISTS quotes CASCADE;
DROP TABLE IF EXISTS support_tickets CASCADE;
DROP TABLE IF EXISTS gallery CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Create Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    password VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Services table
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    description TEXT,
    package_type VARCHAR(50),
    price DECIMAL(10, 2),
    duration INTEGER,
    features JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Bookings table
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    service_id INTEGER REFERENCES services(id) ON DELETE SET NULL,
    booking_date DATE NOT NULL,
    booking_time VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) DEFAULT 'Indianapolis',
    state VARCHAR(100) DEFAULT 'Indiana',
    zip_code VARCHAR(20),
    special_instructions TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    total_price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Reviews table
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
    booking_id INTEGER REFERENCES bookings(id) ON DELETE CASCADE,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    is_approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Gallery table
CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    image_url TEXT NOT NULL,
    category VARCHAR(50),
    is_before_after BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Support Tickets table
CREATE TABLE support_tickets (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    customer_name VARCHAR(255),
    customer_email VARCHAR(255),
    customer_phone VARCHAR(50),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    priority VARCHAR(20) DEFAULT 'medium',
    status VARCHAR(50) DEFAULT 'open',
    assigned_to INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Quotes table
CREATE TABLE quotes (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    service_type VARCHAR(50) NOT NULL,
    plan_type VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100),
    state VARCHAR(100),
    zip_code VARCHAR(20),
    property_size VARCHAR(100),
    additional_info TEXT,
    calculated_price DECIMAL(10, 2),
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Admin User (password: Admin123!)
INSERT INTO users (name, email, phone, password, is_admin) 
VALUES (
    'Admin',
    'haywoodlatrice4@gmail.com',
    '(317) 446-3498',
    '$2b$10$YourHashedPasswordHere',
    TRUE
);

-- Insert Services
INSERT INTO services (name, category, description, package_type, price, duration, features) VALUES
('Car Detailing - Basic', 'car', 'Professional interior and exterior car cleaning', 'basic', 79.99, 90, 
 '["Interior vacuuming", "Exterior wash", "Window cleaning", "Tire cleaning"]'::jsonb),
('Car Detailing - Premium', 'car', 'Complete car detailing with wax and polish', 'premium', 149.99, 120, 
 '["Deep interior cleaning", "Exterior wash & wax", "Polish", "Leather conditioning", "Engine bay cleaning"]'::jsonb),
('Car Detailing - Elite', 'car', 'Ultimate car detailing experience', 'elite', 249.99, 180, 
 '["Complete interior detail", "Paint correction", "Ceramic coating", "Leather treatment", "Engine detailing", "Headlight restoration"]'::jsonb),
('House Cleaning - Basic', 'house', 'Standard home cleaning service', 'basic', 199.99, 120, 
 '["Dusting", "Vacuuming", "Mopping", "Bathroom cleaning", "Kitchen cleaning"]'::jsonb),
('House Cleaning - Premium', 'house', 'Deep cleaning for your home', 'premium', 349.99, 180, 
 '["Deep cleaning all rooms", "Appliance cleaning", "Window washing", "Baseboards", "Eco-friendly products"]'::jsonb),
('House Cleaning - Elite', 'house', 'Complete home transformation', 'elite', 549.99, 240, 
 '["Complete deep clean", "Carpet shampooing", "Upholstery cleaning", "Organizing", "Move-in/out cleaning"]'::jsonb),
('Office Cleaning - Basic', 'office', 'Standard office cleaning', 'basic', 299.99, 120, 
 '["Desk cleaning", "Trash removal", "Vacuuming", "Restroom cleaning"]'::jsonb),
('Office Cleaning - Premium', 'office', 'Professional office deep cleaning', 'premium', 499.99, 180, 
 '["Complete workspace cleaning", "Kitchen/break room", "Conference rooms", "Window cleaning", "Floor care"]'::jsonb),
('Office Cleaning - Elite', 'office', 'Executive office cleaning service', 'elite', 799.99, 240, 
 '["Full office detail", "Carpet cleaning", "High-touch sanitization", "After-hours service", "Commercial equipment"]'::jsonb);

-- Create indexes
CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_reviews_service_id ON reviews(service_id);
CREATE INDEX idx_tickets_status ON support_tickets(status);
CREATE INDEX idx_quotes_email ON quotes(customer_email);

SELECT 'Database setup complete! Tables created and initial data inserted.' AS status;
