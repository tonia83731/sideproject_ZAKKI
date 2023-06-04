import './components/styles/main.scss';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Home from './components/Main/Home/Home'

import Stories from './components/Main/Stories/Stories'
import Program from './components/Main/Program/Program'
import Event from './components/Main/Event/Event'
import JoinUs from './components/Main/JoinUs/JoinUs'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Header/>
      {/* <Main/> */}
      {/* <Home/> */}
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="stories" element={<Stories/>}/>
            <Route path="programs" element={<Program/>}></Route>
            <Route path="events" element={<Event/>}></Route>
            <Route path="joinus" element={<JoinUs/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
