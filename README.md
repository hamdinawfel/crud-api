# CRUD-API
>Freestyle project for learning purpose with Node.js, Express.js, Mongodb and JWT

## Content

**[1. Technologies](#heading--1)**

**[2. Installation](#heading--2)**

**[3. Configuration ](#heading--3)**

**[4. Folder Structure](#heading--4)**

**[5. Postman Screenshots](#heading--5)**


## 1. Technologies <a name="heading--1"/>
This project uses the following technologies:

|     Technologie    |     Version     | 
| ------------- | :-----------: | 
| express |  4.17.1 | 
| mongoose |  2.0.2 |
| jsonwebtoken |  8.5.1 | 
| multer |  1.4.2   | 
| bcrypt |  1.4.2   |

## 2. Installation <a name="heading--2"/>

```
// clone repository

https://github.com/hamdinawfel/crud-api.git

// Install the dependencies 

npm install 

// Run the server with nodemon

nodemon server
```
## 3. Configuration <a name="heading--3"/>
Make sure to update ```config/keys.js``` file,

```
module.exports = {
    mongoURI: "YOUR_MONGO_URI_HERE",
    secretOrKey: "YOUR_SECRET_KEY_HERE"
  };
```

## 4. Folder Structure <a name="heading--4"/>
```
./
├── config
├── middlewares
├── uplaods
├── controllers
│   ├── post.js
│   :
│   └── ...
├── models
│   ├── post.js
│   :
│   └── ...
│
├── routes
│   ├── posts.js
│   :
│   └── ...
│
└── server.js
```
## 5.Postman Screenshots <a name="heading--5"/>
- Signup User
![signup](https://user-images.githubusercontent.com/47576444/139065875-3c698212-35d4-4f99-bcd0-e7e5db214d39.PNG)

- Login User
![login](https://user-images.githubusercontent.com/47576444/139065882-6e045a78-d883-47bd-a6de-d4f1e35989cb.PNG)

- Create Post
![add](https://user-images.githubusercontent.com/47576444/139065905-84d804c8-1f37-458c-a352-474561ab46e7.PNG)

- Update Post 
![update](https://user-images.githubusercontent.com/47576444/139066424-1ee44947-3f4e-4a04-a07e-2a63c6e63bb3.PNG)
- Delete Post 
![delete](https://user-images.githubusercontent.com/47576444/139066431-25060188-2fd4-4214-941d-cc29343240f5.PNG)
- Get User
![get](https://user-images.githubusercontent.com/47576444/139066441-8c8e9a0b-acb1-453d-9aa2-9581bb24fd2c.PNG)
- Update User
![updated-user](https://user-images.githubusercontent.com/47576444/139066453-eb01368e-a457-456c-bca6-c731d79ff656.PNG)
