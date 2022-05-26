import React from 'react';
import './App.css';

import { Introduce } from "./components/introduce"
import { Works } from "./components/works"
import { Share } from "./components/share"

function App() {
  return (
    <>
      <Introduce />
      <Works />
      <Share />
    </>
  );
}

export default App;
