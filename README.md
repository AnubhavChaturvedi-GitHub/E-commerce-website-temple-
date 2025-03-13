# E-commerce Website Template [Demo Link](https://stupendous-tiramisu-a2ec4a.netlify.app/)

![image](https://github.com/user-attachments/assets/ff05f64d-c93f-4106-a2ae-416ddc720755)

## Description

A full-stack E-commerce Website built using HTML, CSS, Java Servlets, JSP, JDBC, and MySQL. This project includes user authentication, product listings, cart functionality, order processing, and payment integration. 🚀

## Features

- User Authentication
  - Registration
  - Login/Logout
  - Password Encryption

- Product Management
  - Product Listings
  - Product Details
  - Search and Filter Products

- Shopping Cart
  - Add/Remove Items
  - Update Quantities
  - Cart Summary

- Order Processing
  - Order Summary
  - Payment Integration
  - Order Confirmation

- Admin Panel
  - Manage Products
  - View Orders
  - User Management

## Installation

### Prerequisites

- Java Development Kit (JDK) installed
- Apache Tomcat server installed
- MySQL database server installed
- Maven installed

### Steps

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/AnubhavChaturvedi-GitHub/E-commerce-website-template.git
    cd E-commerce-website-template
    ```

2. **Configure Database:**

    - Create a MySQL database named `ecommerce`.
    - Import the database schema from `database/ecommerce.sql`.

3. **Update Database Credentials:**

    - Update the database connection details in the `webapp/WEB-INF/web.xml` file.

    ```xml
    <context-param>
      <param-name>jdbc.url</param-name>
      <param-value>jdbc:mysql://localhost:3306/ecommerce</param-value>
    </context-param>
    <context-param>
      <param-name>jdbc.username</param-name>
      <param-value>YOUR_DB_USERNAME</param-value>
    </context-param>
    <context-param>
      <param-name>jdbc.password</param-name>
      <param-value>YOUR_DB_PASSWORD</param-value>
    </context-param>
    ```

4. **Build the Project:**

    ```bash
    mvn clean install
    ```

5. **Deploy to Tomcat:**

    - Copy the generated WAR file from the `target` directory to the `webapps` directory of your Tomcat server.
    - Start the Tomcat server.

6. **Access the Application:**

    - Open your web browser and go to `http://localhost:8080/E-commerce-website-template`.

## Usage

### User Guide

- **Register/Login:**
  - New users can register by providing their details.
  - Registered users can log in using their credentials.

- **Browse Products:**
  - Users can browse the product listings and view detailed information about each product.

- **Add to Cart:**
  - Users can add products to their shopping cart and update quantities as needed.

- **Checkout:**
  - Users can proceed to checkout, review their order, and make payments.

### Admin Guide

- **Manage Products:**
  - Admins can add, update, and delete products from the inventory.

- **View Orders:**
  - Admins can view all orders placed by customers.

- **User Management:**
  - Admins can manage user accounts and view user details.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the coding standards and write appropriate tests for your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to:

- **Author:** Anubhav Chaturvedi
- **Email:** anubhavchaturvedi@example.com
- **GitHub:** [AnubhavChaturvedi-GitHub](https://github.com/AnubhavChaturvedi-GitHub)
