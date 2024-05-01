API:
This test will require you to use the public Space X GraphQL API. The following link provides access to the base api endpoint, schema and graphql explorer.

GraphQL queries to use:
Company
Launches


Specifications
Display the company details (i.e name, summary and hq ) at the top.Also Add the company management (CEO, COO & CTO) and extra info (i.e launch sites, vehicles and test sites).

Below company details display a table which should list the launches paginated with options for 5 and 10 items per page selected by the user in the very bottom of the table with two buttons for next (>) and previous (<) page and one dropdown to select the 5 or 10 item limit.

The user should also be able to filter and sort the results by launch date or by rocket name.

The information shown in the table should have the following columns:
Id
Mission Name
Rocket Name
Launch Site
Launch Success
Launch Date

Style
Date should follow the following format 23 Feb 2022.
Show different color states depending on launch success.
Feel free to use icons for certain info.





Functionality

1. The mission name should be a link leading to another page where the user should have a prefilled form with all the fields and a button to submit any changes for the specific item. There should be also a close button to go back if the user does not want to make any changes as well as a delete button to delete the item.
2. In the home page it should be also a add new launch button that leads to the same form as above but with all the form fields empty.
3. A dark mode toggle should switch background and text color.
4. In order for the user to have access to the application, a "token" should exist in cookies or local storage. If there is no "token" a login screen prompts the user to click a button that stores a "token". Also a logout button should displayed in the home page.

Git

To start developing, create a git repository and add these instructions as Readme.md in the main branch. Then start developing the application in another branch.

Deployment

Deploy your app to any free platform e.g (netlify, vercel) and share the link together with github repo in your submission.


Tech Stack

The above app needs to be implemented using ReactJS. The choices of frameworks, starters and libraries are up to you.

