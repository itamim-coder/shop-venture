# E-commerce Product and Order Management API

This project is an Express application built with TypeScript, integrating MongoDB using Mongoose, and validating data with Zod. The application handles basic product and order management for an e-commerce platform.

## Table of Contents

- [Project Setup](#project-setup)
- [Data Models](#data-models)
  - [Product Model](#product-model)
  - [Order Model](#order-model)
- [API Endpoints](#api-endpoints)
  - [Product Management](#product-management)
  - [Order Management](#order-management)
- [Validation](#validation)
- [Error Handling](#error-handling)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (Local or Atlas)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-github-username/your-repo-name.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd your-repo-name
   ```
3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
4. **Set up environment variables:**

   Create a `.env` file in the root of your project with the following content:

   ```
   MONGO_URI=your-mongodb-connection-string
   PORT=5000
   ```

5. **Run the application:**
   ```bash
   npm start
   # or
   yarn start
   ```

   The API should now be running at `http://localhost:5000`.

## Data Models

### Product Model

- **Name**: String
- **Description**: String
- **Price**: Number
- **Category**: String
- **Tags**: Array of Strings
- **Variants**: Array of Objects
  - **Type**: String
  - **Value**: String
- **Inventory**: Object
  - **Quantity**: Number
  - **InStock**: Boolean

### Order Model

- **Email**: String
- **ProductId**: String (ObjectId of Product)
- **Price**: Number
- **Quantity**: Number

## API Endpoints

### Product Management

1. **Create a New Product**

   - **Endpoint**: `/api/products`
   - **Method**: `POST`
   - **Sample Request Body**:
     ```json
     {
         "name": "iPhone 13",
         "description": "A sleek and powerful smartphone.",
         "price": 999,
         "category": "Electronics",
         "tags": ["smartphone", "Apple"],
         "variants": [
             {"type": "Color", "value": "Midnight Blue"},
             {"type": "Storage", "value": "256GB"}
         ],
         "inventory": {
             "quantity": 50,
             "inStock": true
         }
     }
     ```

2. **Retrieve All Products**

   - **Endpoint**: `/api/products`
   - **Method**: `GET`
   - **Sample Response**:
     ```json
     {
         "success": true,
         "message": "Products fetched successfully!",
         "data": [
             {
                 "name": "iPhone 13",
                 "description": "A sleek and powerful smartphone.",
                 "price": 999,
                 "category": "Electronics",
                 "tags": ["smartphone", "Apple"],
                 "variants": [
                     {"type": "Color", "value": "Midnight Blue"},
                     {"type": "Storage", "value": "256GB"}
                 ],
                 "inventory": {
                     "quantity": 50,
                     "inStock": true
                 }
             }
             // More products...
         ]
     }
     ```

3. **Retrieve a Specific Product by ID**

   - **Endpoint**: `/api/products/:productId`
   - **Method**: `GET`

4. **Update Product Information**

   - **Endpoint**: `/api/products/:productId`
   - **Method**: `PUT`
   - **Sample Request Body**: Same as creating a new product

5. **Delete a Product**

   - **Endpoint**: `/api/products/:productId`
   - **Method**: `DELETE`

6. **Search a Product**

   - **Endpoint**: `/api/products?searchTerm=keyword`
   - **Method**: `GET`
   - **Sample Response**:
     ```json
     {
         "success": true,
         "message": "Products matching search term 'keyword' fetched successfully!",
         "data": [
             // Matching products...
         ]
     }
     ```

### Order Management

1. **Create a New Order**

   - **Endpoint**: `/api/orders`
   - **Method**: `POST`
   - **Sample Request Body**:
     ```json
     {
         "email": "example@example.com",
         "productId": "5fd67e890b60c903cd8544a3",
         "price": 999,
         "quantity": 1
     }
     ```

2. **Retrieve All Orders**

   - **Endpoint**: `/api/orders`
   - **Method**: `GET`

3. **Retrieve Orders by User Email**

   - **Endpoint**: `/api/orders?email=user@example.com`
   - **Method**: `GET`

## Validation

- **Product Creation/Update**: Ensured through Zod to validate fields like name, price, and inventory.
- **Order Creation**: Validated to ensure sufficient stock and valid pricing.

## Error Handling

- **Insufficient Quantity**: Returns an error if the ordered quantity exceeds available stock.
- **Not Found**: Handles cases where requested routes are not found.
- **Validation Errors**: Provides meaningful error messages for invalid data inputs.

## Development

### Linting

Ensure code quality with ESLint:

```bash
npm run lint
# or
yarn lint
```

### Testing

Run tests with:

```bash
npm test
# or
yarn test
```

## Deployment

To deploy the application, make sure to:

1. **Set up your environment variables** for the production database and any other necessary configurations.
2. **Build the project** (if needed):
   ```bash
   npm run build
   # or
   yarn build
   ```
3. **Start the application** in production mode:
   ```bash
   npm start
   # or
   yarn start
   ```



### Additional Notes

- **Live Server Link**: https://shop-venture-backend.vercel.app/

