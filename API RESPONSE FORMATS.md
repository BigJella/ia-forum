## /api/register

POST request format:

{
    "username": "coolkid69420"
    "studentId": 1234567890,
    "student_first_name": "John",
    "student_last_name": "Doe",
    "email": "example@example.com",
    "password": "password123"
}

Successful Response:
{
    "success": true,
    "message": "Registration Successful"
}

Failed Response:
{
    "success": false,
    "message": "Error details here"
}


## /api/login

## /api/categories

## /api/posts

## /api/post?post_id=