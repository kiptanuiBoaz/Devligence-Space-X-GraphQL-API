import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FILMS_QUERY } from './graphql/query';
import { useQuery } from '@apollo/client';


function App() {
  //from graphql query
  const { data, loading, error } = useQuery(FILMS_QUERY);
  console.log(data, "data")
  console.log(loading, "loading")
  console.log(error, "error")
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
      <h1>SpaceX Launches</h1>
      <div className="card">
        <ul>
          {data.launchesPast.map((launch) => (
            <li key={launch.id}>{launch.mission_name}</li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default App
