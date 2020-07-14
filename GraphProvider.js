import React, {useRef, useState, useEffect} from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App'
import { Provider } from "./context";
import ApolloClient from 'apollo-boost'

// const client = new ApolloClient({
//   uri: process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000',
// }) 
const client = new ApolloClient({
  uri: 'https://eloquent-chandrasekhar-a221ea.netlify.app/.netlify/functions/graphql',
})


const GraphProvider = props => {
  const [ constituency, setConstituency ] = useState(false)
  const [ mp, setMp ] = useState(false)
  return (
    
    <ApolloProvider client={client}>
      <Provider
        value={{
          mp,
          setMp,
          constituency,
          setConstituency,
          test: 'Helllooooooooooo'
        }}
      >
     <App />
     </Provider>
    </ApolloProvider>
  );
};

export default GraphProvider;
