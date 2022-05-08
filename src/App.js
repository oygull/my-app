import Header from './Header';
import Hero from './Hero';
import Copmonents from './Components';
import Subjects from './Subjects';
import Webinar from './Webinar';
import Pricing from './Pricing';
import Aside from './Aside';
import Footer from './Footer';
import './Col.css';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <main id="site-main"> 
      <Copmonents/>
      <Subjects/>
      <Webinar/>
      <Pricing/>
      <Aside/>
     </main>
     <Footer/>
    </div>
  );
}

export default App;
