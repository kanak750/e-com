import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
   <div className='app flex flex-col min-h-screen font-barlow bg-gradient-to-br from-amber-300 to-orange-300'>
    <Navbar />
    <div className='flex-grow'>
      <Homepage />
    </div>
    <Footer />
   </div>
  );
}

export default App;
