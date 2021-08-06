import React from 'react';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div class='d-flex flex-column mh-100 bg-gradient-success'style={{height:'100vh'}} >
    <Navbar/>
    <div class='align-items-end fixed-bottom'>
      <br/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
