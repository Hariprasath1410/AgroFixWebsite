AgroFix Project AgroFix is a full-stack web application designed to bridge the gap between farmers and agricultural experts. The system features a Frontend built with React.js and a Backend powered by Node.js, Express.js, and MySQL. This project ensures seamless communication, data storage, and role-based access.


Features AgroFix-Frontend: • Role-Based Dashboards: o Admin Dashboard with product management features. o User Dashboard for general access and features. • Routing: Navigation between pages using react-router-dom. • State Management: Efficient handling of application state using Context APIs. • Responsive Design: Mobile-friendly layout and UI components. AgroFix-Backend: • REST API: Backend provides endpoints for managing products, users, and admin operations. • MySQL Database: Secure and efficient data storage. • Authentication: Token-based authentication using JWT (future improvement). • Error Handling: Comprehensive error handling for smoother user experience.


Tech Stack Frontend: React.js, HTML5, CSS3, JavaScript, Axios Backend: Node.js, Express.js, MySQL Database: MySQL Version Control: Git
Frontend Setup


Navigate to the Frontend Folder: bash Copy code cd agrofix-frontend
Start the Development Server: bash Copy code npm start
Environment Variables: Create a .env file in the frontend directory and include the backend URL: arduino Copy code REACT_APP_BACKEND_URL=http://localhost:5000
Backend Setup


Navigate to the Backend Folder: bash Copy code cd agrofix-backend
Configure Environment Variables: Create a .env file in the backend directory and add the following: makefile Copy code DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=agrofix
JWT_SECRET=
PORT=5000
Start the Backend Server: bash Copy code npm start
API Endpoints: o GET /products: Fetch all products. o POST /products: Add a new product (Admin only). o DELETE /products/:id: Delete a product (Admin only).


Functionality

Admin Dashboard View, add, update, and delete products. Manage users and assign roles. Access advanced analytics (future scope).
User Dashboard Browse available products or services. View detailed product information. Interact with features like searching and filtering (future scope).
Product Management Products can be dynamically created, updated, or removed by Admins. Product details include name, price, and description.
Role-Based Access Admin: Full access to manage all resources (e.g., products and users). User: Restricted access to general functionalities only.
Routing Seamless navigation between pages using React Router. Protected routes to ensure only authorized users access specific pages.
MySQL Database Integration Persistent storage for products and user information. Secure and efficient data retrieval.
API Integration Fetch product and user data from the backend. Perform CRUD operations for products via RESTful API.
Responsive Design User-friendly interface optimized for both desktop and mobile devices.
Error Handling Displays appropriate error messages for failed actions or API calls. Retry functionality for critical operations.
Future Enhancements (Planned) User authentication and session management using JWT. Advanced search, filter, and recommendation systems. Dashboard analytics for admin users.
