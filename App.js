import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Destination from './Destination';
import Packages from './Packages';
import About from './About';
import Contact from './Contact';

import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Destination' element={<Destination/>}/>
        <Route path='/Packages' element={<Packages/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Destination/>
      <Packages/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;







// import './App.css';
// import Navbar from './Navbar';
// import Home from './Home';
// import Login from './Login';
// import About from './About';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path:"/",
//       element: <><Navbar/><Home/></>
//     },
//     {
//       path:"/Login",
//       element: <><Navbar/><Login/></>
//     },
//     {
//       path:"/About",
//       element: <><Navbar/><About/></>
//     },
//   ])
//   return (
//     <div className="App">
      
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

