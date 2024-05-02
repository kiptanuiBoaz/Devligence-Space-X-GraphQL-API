import { gql, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { selectPagination } from "../redux/paginationSlice";


export const CompanyAndLaunchesQuery = () => {
  const { limit, page: currentPage } = useSelector(selectPagination);

  const { loading, error, data } = useQuery(gql`
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
      launches(limit: ${limit}, offset: ${(currentPage - 1) * limit}) {
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
  `);

  return { loading, error, data }
};
