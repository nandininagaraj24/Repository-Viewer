##This is a React-Redux application to view repositories of an organization and its associated commits on Github.##

#Setup

Pre-Requisites : Node

To bring up the application:

npm run start:application

The command installs dependencies, builds the application and deploys on port 3100


#To view the application on a browser:
http://localhost:3100/

The port can be changed in the file webpack.config.js. Please replace the value for devServer -> port to your desired port number
and go to that path/port on the browser.

#To run Unit Tests using Jest:
npm run test



##Overview:##

The landing screen:
It is an Empty State screen which has some help text for the user in order to begin.
There is a search bar where user can enter the name of an Organization to view more details

The Repo screen:
When the user enters the name of an Organization, the input is validated agains a pattern. The repo name can have Alhabets, numbers, Space, Special characters - _ with a max length of 50

If the pattern matches and there exists an organization on Github with the entered name,
The table Shows information about the repositories for the matched Organization.
By default the response is sorted by forks(popularity) in descending order

If the entered Organization name does not match a repository, an empty table is shown.

When the search text is completely removed, the application shows Empty State

User can sort by other metrics like the last updated time, created time, language, name that are important when we talk about repositories.


The Commits Screen:

User can select an individual row by clicking on "View Commits" link to view the commits
list made in that repository
This take the user to commits table view, where the atble shows the SHA ID, user, commit date and time.

The response is ordered by Commit Date and Time in descending order.

There in a breadcrumb navigator at the top of the screen which helps the user to go back to the previous screen.



#Unit tests are written using Jest
Caveats: Even though all tests are passing, NPM is returning an exit status of 1

#Performance Improvement

On search of an Organization, the API is not called every key press. There is a delay to reduce the number of calls
Once the API is called, until the response is received the user is indicated about the ongoing action with a spinner
and when the data is received, the metrics are shown for the selected repository

Input validation:
There is a regex pattern matching the entered input so that the user does not enter wildcard characters or execute a script

Error handling:
When the name of the repository does not exist, the API throws an error which is caught and handled appropriately. The table is shown an empty data set


