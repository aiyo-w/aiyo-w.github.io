import React from 'react';
import './App.css';

import { Introduce } from "./components/introduce"
import { Works } from "./components/works"
import { AiyoUI } from "./components/aiyo-ui"

function App() {
  return (
    <>
      <Introduce />
      <Works />
      <AiyoUI />
    </>
  );
}

export default App;
