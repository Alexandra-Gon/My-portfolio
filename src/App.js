import HomePage from './Pages/HomePage/HomePage';
// Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import BackToTop from './Components/BackToTop/BackToTop';
// Styles
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <HomePage />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
