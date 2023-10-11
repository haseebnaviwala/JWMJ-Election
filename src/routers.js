import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import App from './App';
import { Admin } from '../src/admin/admin'

const CustomRoutes = () => (

    <Router>
      <div>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>
      </div>
    </Router>



)

export default CustomRoutes;