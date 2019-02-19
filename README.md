# 3-legged-oauth  

There're two branches in this repository. One is Application, another one is API. You need both server to use this project.

## API branch (Resource Server)  

This is the Resource Server that has OAuth 2.0 APIs.

1. Clone this branch  
```
git clone -b api https://github.com/ninanung/3-legged-oauth.git
```

2. Move and start server  
```
cd 3-legged-oauth/server
npm start
```

3. API Server will start in `http://localhost:3002`  

## Application branch (Client)  

This is the Client that make connection from User(Resource Owner) to Resource Server.

1. Clone this branch  
```
git clone -b application https://github.com/ninanung/3-legged-oauth.git
```

2. Move and start server  
```
cd 3-legged-oauth/server
npm start
```

3. Application Server will start in `http://localhost:3001`  

## Frontend branch (Resource Server)  

This is the Frontend Server that render React SPA web page.

1. Clone this branch  
```
git clone -b frontend https://github.com/ninanung/3-legged-oauth.git
```

2. Move and start server  
```
cd 3-legged-oauth/server
npm start
```

3. Frontend Server will start in `http://localhost:3000`  

## Test the 3-legged-oauth  

1. Connect to `http://localhost:3001/login`  

2. Click the button "Login with Sample Service".  

3. It will redirect you to `http://localhost:3002/api/auth/app` (api server) and if you didn't login to service, redirect you to `http://localhost:3000/login` again.  

4. Please Login.  

5. Allow the app to use your account data.  

6. Now you authorized and client server got token.  

7. Client server will show your email data when you login to client page.  