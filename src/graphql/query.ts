import { gql } from "@apollo/client";

export const Company_And_Launches_Query = gql`
    {
    company {
      ceo
      coo
      cto
      name
      summary
      headquarters {
        city
      }
      test_sites
      vehicles
      launch_sites
    }
    launches(limit:10) {
      id
      mission_name
      rocket {
        rocket_name
      }
      launch_site {
        site_name
      }
      launch_success
      launch_date_local
    }
  }
`;
