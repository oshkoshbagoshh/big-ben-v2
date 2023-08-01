import React from "react";
import SiteContainer from "./components/SiteContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// pages 
import Home from './components/Pages/Home';
import Hello from './Hello';
import LogIn from "./components/Pages/LogIn/LogIn";

import Page2 from './pages/Page2'; 
import Search from './pages/Search';
// 


// //  ORIGINAL APP.JS (DON'T DELETE)


// -- this is the stuff we tried and gave us errors
// const App = () => {
//   const [currentPage, setCurrentPage] = useState("Home");
//   return (
//     <div>
//     <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
//      <SiteContainer
//          currentPage={currentPage}
//        setCurrentPage={setCurrentPage}
//       />
//      <Footer />
//    </div>
//   );
// };



// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
var authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

var authLink = setContext((_, { headers }) => { });
// get the authentication token from local storage if it exists
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hello" element={<Hello />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/search" element={<Search />} />
            
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}




export default App;