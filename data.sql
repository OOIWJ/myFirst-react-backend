use ecommerce;

INSERT INTO products (name, price, image) VALUES
('Sleek Smartwatch', 199.99, 'https://picsum.photos/id/20/300/200'),
('Wireless Earbuds', 79.99, 'https://picsum.photos/id/1/300/200'),
('Portable Power Bank', 49.99, 'https://picsum.photos/id/26/300/200'),
('HD Action Camera', 129.99, 'https://picsum.photos/id/96/300/200');

INSERT INTO marketing_preferences (id, preference) VALUES (1, 'email');  -- Email Marketing
INSERT INTO marketing_preferences (id, preference) VALUES (2, 'sms');    -- SMS Marketing
