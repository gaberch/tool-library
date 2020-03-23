# tool-library

## Instructions

Run `npm install` from backend folder

Run `npm install` from frontend folder

In backend folder, in one terminal session run `npm run dev`. The backend server should not be served on localhost:3000

In frontend folder, in a separate terminal session run `npm run dev-server`. The server should not be served on localhost:8080


## Current Functionality
- Website has a home page and a "Browse Tools page. 
- Browse Tools has all available tools currently in the data base. They show whether they are currently checked out or not.
- Each Tool in the database has a name, description and available attritube.
- Available backend endpoints:
    - POST at `localhost:3000/tools`. This allows to create new tools in database
    - GET at `localhost:3000/tools`. This gets all of the tools available in the database
    - GET at `localhost:3000/tools/:id`. This fetches one tool based on object id as set in database
    - PATCH at `localhost:3000/tools/:id`. This updates one tool's information based on objectID set in database





## Current issues
- Invidual tool link are leading back to the "Browse Tools" page. Ran out of time to figure out how to send props from AppRouter to Tool component to be able to render each individual tool's information and to allow for checkin/checkout of tool
- The maximum checkout limit of 3 tools has not been currently implemented. The Way I envisioned it is to trigger a count of all tools that are "unavaiable" when the "checkout" button is pressed on the individual tool page and if that value is 3 or greater, then a pop up message would appear letting the user know that the limit has been reached.
- Jest library has been installed for both frontend and backend but ran out of time to create tests for each
- Although the project is setup to handle .scss for design purposes, I ran out of time to add some designs to the webiste components.
