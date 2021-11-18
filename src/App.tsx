import { Home } from './core';
import './App.scss';
import { Route, Routes } from 'react-router';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
