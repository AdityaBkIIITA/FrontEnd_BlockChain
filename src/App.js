import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';

// Example of a data array that
// you might receive from an API
const data = [
{ File: "Anom", Version: 19, Download: "Male" },
]

function App() {
return (
  // <div>
  <Router>
      <Navbar />
      <Routes>

        <Route path='/' exact element ={<Home/>}></Route>
        <Route path='/about' element ={<About/>}></Route>
        <Route path='/events' element ={<Events/>}></Route>
        <Route path='/annual' element ={<AnnualReport/>}></Route>
        <Route path='/team' element ={<Teams/>}></Route>
        <Route path='/blogs' element ={<Blogs/>}></Route>
        <Route path='/sign-up' element ={<SignUp/>}></Route>
        <Route path='/signin' element ={<SignIn/>}></Route>

    </Routes>
    </Router>
    // <div className="App">
  	// <table>
  	// 	<tr>
  	// 	<th>File</th>
  	// 	<th>Version</th>
  	// 	<th>Download</th>
  	// 	</tr>
  	// 	{data.map((val, key) => {
  	// 	return (
  	// 		<tr key={key}>
  	// 		<td>{val.File}</td>
  	// 		<td>{val.Version}</td>
  	// 		<td>{val.Download}</td>
  	// 		</tr>
  	// 	)
  	// 	})}
  	// </table>
    // </div>
  // </div>
);
}

export default App;
