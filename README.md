# Tool Library App

This is a simple NodeJS and React implementation that aims to simulate a library of physical tools similar in functionality to the Toronto Tool Library ([https://irbe.myturn.com/library/inventory/browse](https://irbe.myturn.com/library/inventory/browse))

## Instructions

Run `npm install` from backend folder

Run `npm install` from frontend folder

In backend folder, in one terminal session run `npm run dev`. The backend server should now be served on localhost:3000

In frontend folder, in a separate terminal session run `npm run dev-server`. The server should now be served on localhost:8080


## Available Backend Endpoints


- POST at `localhost:3000/tools` - This allows to create new tools in database
- GET at `localhost:3000/tools` - This gets all of the tools available in the database
- GET at `localhost:3000/tools/:id` - This fetches one tool based on object id as set in database
- PATCH at `localhost:3000/tools/:id` - This updates one tool's information based on objectID set in database



