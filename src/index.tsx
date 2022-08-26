import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import { UserContextProvdier } from './context/provider/UserContextProvider';
import { AuthContextProvdier } from './context/provider/AuthContextProvider';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://18.212.70.9:8080//graphql',
  cache: new InMemoryCache(),
  // headers: { origin: "https://nestserver.z13.web.core.windows.net/" }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  
);
root.render(
  <BrowserRouter>
    <UserContextProvdier>
      <AuthContextProvdier>
      <ApolloProvider client={client}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ApolloProvider>
      </AuthContextProvdier>
    </UserContextProvdier>

  </BrowserRouter>
);

