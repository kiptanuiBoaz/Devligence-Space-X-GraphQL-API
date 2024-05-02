import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloProvider } from "@apollo/client"
import { client } from './graphql/index.ts'
import { Provider } from 'react-redux'
import store from './app/store.ts'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)
