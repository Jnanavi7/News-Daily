import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import { Component } from 'react';

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API;
    return(
<Router>
    <Navbar />
    <Routes>
      <Route path="/"  element={<News  key="general" apiKey={apiKey}  pageSize={5} country="in" category="general" />} />
      <Route path="/entertainment" element={<News  key="entertainment" apiKey={apiKey} pageSize={5} country="in" category="entertainment" />} />
      <Route path="/general" element={<News  key="general" apiKey={apiKey} pageSize={5} country="in" category="general" />} />
      <Route path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={5} country="in" category="technology" />} />
      <Route path="/health" element={<News key="health" apiKey={apiKey} pageSize={5} country="in" category="health" />} />
      <Route path="/business" element={<News  key="business"  apiKey={apiKey} pageSize={5} country="in" category="business" />} />
      <Route path="/science" element={<News  key="science" apiKey={apiKey}  pageSize={5} country="in" category="science" />} />
      <Route path="/sports" element={<News  key="sports" apiKey={apiKey} pageSize={5} country="in" category="sports" />} />
    </Routes>
  </Router>
    );
    
  }
   

export default App;