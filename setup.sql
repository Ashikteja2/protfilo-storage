
CREATE DATABASE IF NOT EXISTS stayluxe_db;

USE stayluxe_db;

CREATE TABLE IF NOT EXISTS hotels (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    city VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    price_per_night DECIMAL(10,2) NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    available BOOLEAN DEFAULT TRUE
);

SHOW TABLES;
