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

3. Go to service and login  
You can connect to service with `http://localhost:3002`, this page will redirect you to login page. Username is `client` and password is also `client`.

4. Go register  
You can register the Application.

## Application branch (Client)

This is the Client that make connection from User(Resource Owner) to Resource Server.