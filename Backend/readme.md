
# User Registration Endpoint

## Endpoint

`POST /users/register`

## Description

Registers a new user with the provided details.

## Request Body

| Field     | Type   | Description                                   |
|-----------|--------|-----------------------------------------------|
| firstname | String | The user's first name (minimum 2 characters) |
| lastname  | String | The user's last name (minimum 2 characters)  |
| email     | String | The user's email address (must be valid)      |
| password  | String | The user's password (minimum 6 characters)    |

## Responses

- **201 Created**
  - **Description**: User successfully registered.
  - **Body**:
    ```json
    {
      "token": "jwt_token",
      "user": { /* user object */ }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation errors.
  - **Body**:
    ```json
    {
      "errors": [
        { "msg": "Error message", "param": "field" }
      ]
    }
    ```