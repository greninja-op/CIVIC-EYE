-- CIVIC-EYE Database Initialization
-- Single MySQL database for all services

CREATE DATABASE IF NOT EXISTS civiceye;
USE civiceye;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('citizen', 'worker', 'admin') DEFAULT 'citizen',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Grievances table
CREATE TABLE IF NOT EXISTS grievances (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    status ENUM('pending', 'assigned', 'in_progress', 'resolved') DEFAULT 'pending',
    upvotes INT DEFAULT 0,
    image_tag VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Bills table
CREATE TABLE IF NOT EXISTS bills (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    type VARCHAR(100) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    due_date DATE NOT NULL,
    status ENUM('pending', 'paid') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Buses table (for real-time tracking)
CREATE TABLE IF NOT EXISTS buses (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    bus_number VARCHAR(50) NOT NULL,
    route VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    active BOOLEAN DEFAULT TRUE,
    eta INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Parking spots table
CREATE TABLE IF NOT EXISTS parking_spots (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255) NOT NULL,
    total_spots INT NOT NULL,
    available_spots INT NOT NULL,
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- SOS alerts table
CREATE TABLE IF NOT EXISTS sos_alerts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    latitude DECIMAL(10, 7) NOT NULL,
    longitude DECIMAL(10, 7) NOT NULL,
    type VARCHAR(50) DEFAULT 'emergency',
    status ENUM('active', 'responded', 'resolved') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Hospitals table
CREATE TABLE IF NOT EXISTS hospitals (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    icu_beds INT DEFAULT 0,
    general_beds INT DEFAULT 0,
    ventilators INT DEFAULT 0,
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@civiceye.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin'),
('John Citizen', 'john@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'citizen');

INSERT INTO buses (bus_number, route, latitude, longitude, active, eta) VALUES
('B101', 'City Center - Airport', 28.6139, 77.2090, TRUE, 5),
('B205', 'Station - Mall', 28.7041, 77.1025, TRUE, 8),
('B312', 'Park - Hospital', 28.5355, 77.3910, TRUE, 3);

INSERT INTO parking_spots (location, total_spots, available_spots, latitude, longitude) VALUES
('City Mall', 50, 12, 28.6139, 77.2090),
('Central Station', 30, 0, 28.7041, 77.1025),
('Hospital', 25, 8, 28.5355, 77.3910);

INSERT INTO hospitals (name, icu_beds, general_beds, ventilators, latitude, longitude) VALUES
('City Hospital', 4, 12, 2, 28.6139, 77.2090),
('Central Medical', 0, 8, 1, 28.7041, 77.1025),
('District Hospital', 6, 20, 3, 28.5355, 77.3910);
