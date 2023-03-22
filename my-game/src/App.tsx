import React from 'react';
import './App.css';
import { Header } from './features/header/Header';
import { Footer } from './features/footer/Footer';
import { Grid } from './features/grid/Grid';

function App() {
  return (
    <div className="App relative h-screen flex flex-col justify-between">
      <Header />
      <Grid />
      <Footer /> 
    </div>
  );
}

export default App;
