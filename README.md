# SpaceX Launch Dashboard

This is a web application that provides information about SpaceX launches using the SpaceX GraphQL API. Users can view company details, list launches, filter and sort launches, and perform various other actions related to launches.

## API

The application uses the public SpaceX GraphQL API. The base API endpoint, schema, and GraphQL explorer can be accessed [here](https://api.spacex.land/graphql/).

### GraphQL Queries Used

- Company
- Launches

## Specifications

### Company Details

The company details, including name, summary, headquarters, CEO, COO, CTO, launch sites, vehicles, and test sites, are displayed at the top of the page.

### Launches Table

Below the company details, a table is displayed listing the launches. The table is paginated with options for 5 and 10 items per page. Users can navigate between pages using next and previous buttons and can select the item limit from a dropdown.

#### Launch Table Columns

- Id
- Mission Name (linked to launch details page)
- Rocket Name
- Launch Site
- Launch Success (with different color states)
- Launch Date (formatted as DD MMM YYYY)

### Functionality

1. **Mission Name Link**: Clicking on the mission name in the launch table leads to a prefilled form with all the fields for that launch. Users can submit changes, close the form, or delete the item.

2. **Add New Launch Button**: On the home page, there is a button to add a new launch. Clicking this button leads to a form with empty fields.

3. **Dark Mode Toggle**: Toggles between dark and light themes, changing background and text colors.

4. **Authentication**: Users must have a "token" stored in cookies or local storage to access the application. If no token exists, a login prompt appears with a button to store a token. A logout button is also available on the home page.

## Tech Stack

- ReactJS
- TypeScript
- React Router
- Redux

## Deployment

The application is deployed to [platform_name](#). The source code can be found on [GitHub](#).

## Development

To start developing, clone the git repository and switch to a new branch. The main branch contains this README.md file with instructions.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.