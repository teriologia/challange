#Project Description
Simple node.js application rendering '*.pug' files. Handling GET and POST request

# installation
1. Clone repo: `git clone https://github.com/teriologia/challenge.git`
2. Install modules: `npm install`
3. Start server: `npm run start:dev`
4. Open website: `localhost:3000/login`

# Npm Scripts
1. `npm start`:  starts server for heroku
2. `npm run start:dev`: start serverfor development
3. `npm run build`: creating bundle js and style with gulp
4. `npm run watch`: starting gulp watch
5. `npm run test`: unit test with mocha 

# Routers
## Login

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /login | `GET` | Empty | Rendering login.pug |
| /login | `POST` | {'email':'example@example', 'password':'dummy1234'}| Creating session and redirecting to /album |

## Albums

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /album | `GET` | Empty | Rendering Album.pug |

# Demo
[Live demo on Heroku](http://zingat-challenge.herokuapp.com/login)

enjoy!
