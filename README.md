# ip-stats

This is a *React Js* with *Typescript* project was an experimental one, and was made for users to search for any IP information.

Currently the api that I'm using for this project is not paid version, the plan don't have access to calls with SSL certificates (HTTPS), it only allows the user to call with HTTP. Vercel dont allow HTTP requests to be done in it plataform so you only can try application locally, for now. 

Acess here [link](https://ipstack.com/) and get your own free API key. After that you need to create a .env.local file and set it like this:

```Javascript
REACT_APP_API_KEY=<KEY>
```

## Running Features
- See my own IP info
- Search any IP

## Execution

Currently, I run this app with the Nodemon tool and the command below. Go to package.json files in the scripts tag make sure to have:

```Javascript
"dev": "nodemon Server.js",
```

```Javascript
npm: npm start dev
```

## Prints
- ![alt text](https://github.com/AaronCrvl/ip-stats/blob/main/src/img/app/mainScreen.jpg?raw=true)
- ![alt text](https://github.com/AaronCrvl/ip-stats/blob/main/src/img/app/searchIp2.jpg?raw=true)
- ![alt text](https://github.com/AaronCrvl/ip-stats/blob/main/src/img/app/searchIp.jpg?raw=true)

