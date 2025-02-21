import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <h1>Santa Maria</h1>
      <button className='btn btn-primary'>Köp</button>
    </>
  );
}

export default App;
