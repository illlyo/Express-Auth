# Express-Auth
Skeleton Express app with needed files/code for proper authentication


Things to Remember After Cloning:
1.  CD into root dir and run yarn install in Command prompt to install dependencies.

2.  Create a .gitignore and .env file, populate .env file with SECRET_KEY value. <br />
Example:  SECRET_KEY=wqioej019fn

2a. If you're unfamiliar with .gitignore, simply type .env in the file

3.  You can adjust where app routes after successful or failed login attempt in auth-routes

4.  You can adjust columns in the user table within migration file.

5.  If you make changes to the columns in the migration file, make sure to update the User model as needed.

6.  Make sure line 13 of db/config.js reflects the proper database name!

7.  Run yarn start to launch server, open web browser and visit localhost:3000 to test.

