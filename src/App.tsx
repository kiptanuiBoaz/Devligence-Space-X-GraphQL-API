import './App.css'
import { Company_And_Launches_Query } from './graphql/query';
import { useQuery } from '@apollo/client';


function App() {
  //from graphql query
  const { data, loading, error } = useQuery(Company_And_Launches_Query);
  console.log(error, "data")

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <>
      <div>

      </div>
      <p>{data.company.name}</p>
      <p>{data.company.ceo}</p>
      <p>{data.company.coo}</p>
      <p>{data.company.headquarters.city}</p>
      <div className="card">
        <ul>
          {data.launches.map((launch) => (
            <li key={launch.id}>{launch.mission_name}</li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default App
