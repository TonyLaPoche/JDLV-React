import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { SideBar } from './components/sidebar/SideBar';
import Grid from './components/grid/Grid';
import { Timer } from './components/timer/timer';

function App() {
  return (
    <div className="App relative h-screen flex flex-col justify-between">
      <Header />
      <SideBar />
      <section className="p-4">
        <Timer />
        <Grid />
      </section>
      <Footer />
    </div>
  );
}

export default App;
