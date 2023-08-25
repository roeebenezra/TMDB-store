# Authors

#### Roee BenEzra 206123994, email : roibe@edu.hac.ac.il

---------------------------------------------
## TMDB Store

This project is a movie store, where you can search for movies and add them to your cart.
You can also see your cart in the top right link and remove movies from it.

Home page shows the most popular movies and Tv shows in the TMDB database.

You can perform a search by name, and the results will be shown in the search page.
You can also perform an attributes to the search, such as release date, genre.

After finishing the shopping, you will be redirected to the purchase page, where you will need
to put in your info and finish the purchase.

## Project Structure

The project is divided into 2 parts: the server and the client.
The server is a spring boot application, and the client is a react application.

---------------------------------------------


## Initializing the template

In order to initialize the project make sure to:

1. When you open the project, if intelliJ propose to "Load Maven Project" do it. You can later reload maven with the "M" icon on the right of the screen, or by right clicking on the pom.xml file and selecting "Maven -> Reload project".
2. You see red lines in the code? Go to File -> Project Structure -> Project Settings -> Project -> SDK -> and choose your Java SDK
3. Still see red stuff? Open the same dialog and click on "Fix" if you see some
4. Edit your configuration "ex4" at the top right. Make sure the "Main class" is set to "hac.DemoApplication" and that Java is set

Everything ok?
1. Run the SQL server as shown in the video (week 6) and create a database named "ex4". The DB credentials are stored in the application.properties file. You may change them if you want.
2. Run the project, you should not see any errors in IntelliJ console

### React client (movie-app)

Open a terminal in *movie-app* Directory and run `npm install` and then `npm start`.
It should open a browser window with the movie-app running.
