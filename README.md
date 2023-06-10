# Internship Management System

This project is aimed at creating an API for managing college and intern data for an internship program. It allows creating colleges, adding interns, retrieving college details, and fetching the list of interns for a specific college.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- dotenv
- email-validator
- axios

## Setup

1. Clone the repository:

```
git clone <repository-url>
```

2. Install dependencies:

```
cd <project-folder>
npm install
```

3. Create a `.env` file in the root directory and provide the necessary environment variables:

```
PORT=<port number>
URI=<mongodb-uri>
```

Replace `<mongodb-uri>` with the MongoDB connection URI. Also, provide your AWS access key and secret access key for accessing the S3 service.

4. Start the server:

```
npm start
```

The server will start running on `http://localhost:3000`.

## API Endpoints

### 1. Create College

Create a new college document.

- Method: POST
- URL: /functionup/colleges
- Body:

```json
{
  "name": "iith",
  "fullName": "Indian Institute of Technology, Hyderabad",
  "logoLink": "<s3-url>"
}
```

- Response:

```json
{
  "status": true,
  "data": {
    "name": "iith",
    "fullName": "Indian Institute of Technology, Hyderabad",
    "logoLink": "<s3-url>",
    "isDeleted": false
  }
}
```

### 2. Create Intern

Create a document for a new intern.

- Method: POST
- URL: /functionup/interns
- Body:

```json
{
  "name": "Jane Does",
  "email": "jane.doe@iith.in",
  "mobile": "90000900000",
  "collegeName": "iith"
}
```

- Response:

```json
{
  "status": true,
  "data": {
    "isDeleted": false,
    "name": "Jane Does",
    "email": "jane.doe@iith.in",
    "mobile": "90000900000",
    "collegeId": "616b5f8c8d24a80001c6e0f0"
  }
}
```

### 3. Get College Details

Retrieve the details of a college along with the list of interns who have applied for an internship at that college.

- Method: GET
- URL: /functionup/collegeDetails?collegeName=iith
- Response:

```json
{
  "status": true,
  "data": {
    "name": "iith",
    "fullName": "Indian Institute of Technology, Hyderabad",
    "logoLink": "<s3-url>",
    "interns": [
      {
        "_id": "616b5f8c8d24a80001c6e0f1",
        "name": "Jane Doe",
        "email": "jane.doe@iith.in",
        "mobile": "90000900000"
      },
      {
        "_id": "616b5f8c8d24a80001c6e0f2",
        "name": "John Doe",
        "email": "john.doe@iith.in",
        "mobile": "90000900001"
      }
    ]
  }
}
```

## Testing

To test the APIs, you can use Postman. Import the provided Post

man collection and make requests to the corresponding endpoints.

1. Import the collection file `Project2Internship.postman_collection.json` into Postman.

2. Start the server (`npm start`) and run the requests in the collection.

## Notes

- The `.env` file contains sensitive information such as the MongoDB URI credentials. Make sure to keep this file secure and don't share it publicly.
- The `email-validator` library is used to validate email addresses.
- The `mongoose` library is used to interact with the MongoDB database.
- The `axios` library is used for validate the logo link.

## Conclusion

This API provides the necessary functionality to manage colleges and interns for an internship program. It allows creating colleges, adding interns, retrieving college details, and fetching the list of interns for a specific college. The project is implemented using Node.js, Express.js, MongoDB, and other relevant libraries. Feel free to customize and extend the functionality as per your requirements.

<!-- https://functionup-stg.s3.ap-south-1.amazonaws.com/thorium/iitd.png -->