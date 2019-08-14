import React from 'react';
import './App.css';
import {Hello} from './components/Hello';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello title="iModelJS Learn Series" subTitle="Jest Snapshots" />
    </div>
  );
}

export default App;
