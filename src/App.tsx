import React from 'react';
import './App.css';

import { Introduce } from "./components/introduce";
import { Works } from "./components/works";
import { AiyoUI } from "./components/aiyo-ui";
import { StaticWeb } from './components/static-web';

function App() {
  return (
    <>
      <Introduce />
      <Works />
      <AiyoUI />
      <StaticWeb />
    </>
  );
}

export default App;
