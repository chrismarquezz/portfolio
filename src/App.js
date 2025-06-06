import Home from './Home';
// If you have router, wrap Home with it
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* Add other routes here if needed */}
    //   </Routes>
    // </Router>
    <Home /> // If no router for a single page app
  );
}

export default App;