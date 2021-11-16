import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Errands from "./listComponents/errands/Errands";
import GroceryList from "./listComponents/grocery/GroceryList";
import WeekendProject from "./listComponents/weekend/WeekendProject";

const Tasks = () => {

    console.log("initia Tasks");
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="weekend">WEEKEND PROJECTS</Link>
          </li>
          <li>
            <Link to="grocerylist">GROCERY LIST</Link>
          </li>
          <li>
            <Link to="errands">ERRANDS</Link>
          </li>
        </ul>
        <Routes>
          <Route path="weekend/*" element={<WeekendProject />} />
          <Route path="grocerylist/*" element={<GroceryList />} />
          <Route path="errands/*" element={<Errands />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Tasks;
