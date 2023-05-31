import './components/styles/main.scss';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Home from './components/Main/Home/Home'

function App() {
  return (
    <>
      <Header/>
      <Main/>
      {/* <Home/> */}
      <Footer/>
    </>
  );
}

export default App;
