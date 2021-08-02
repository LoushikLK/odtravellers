import './App.css';
//importing bootstrap files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

import Routes from './component/Routes'
import Navbar from './component/Navbar'
import Footer from './component/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />

    </>
  )
}

export default App;
