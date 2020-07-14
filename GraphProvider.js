import React, {useRef, useState, useEffect} from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App'
import ApolloClient from 'apollo-boost'

// const client = new ApolloClient({
//   uri: process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000',
// }) 
const client = new ApolloClient({
  uri: 'https://eloquent-chandrasekhar-a221ea.netlify.app/.netlify/functions/graphql',
})


const GraphProvider = props => {

  return (
    
    <ApolloProvider client={client}>
     <App />
    </ApolloProvider>
  );
};

export default GraphProvider;
