import { BrowserRouter } from 'react-router-dom';
import { Hero, Navbar } from './components';

const App = () => (
  <BrowserRouter>
    <div className="z-0 relative bg-primary">
      <div className="bg-center bg-hero-pattern bg-no-repeat bg-cover">
        <Navbar />
        <Hero />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
