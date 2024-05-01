import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{data.company.name}</h1>
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
