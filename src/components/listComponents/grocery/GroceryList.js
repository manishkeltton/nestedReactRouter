import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BreadAndGrains from "./BreadAndGrains";
import Produce from "./Produce";
import Snacks from "./Snacks";

const GroceryList = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="produce">PRODUCE</Link>
        </li>
        <li>
          <Link to="breadandgrains">BREADS AND GRAINS</Link>
        </li>
        <li>
          <Link to="snacks">SNACKS</Link>
        </li>
      </ul>
      <Routes>
        <Route path="produce" element={<Produce />} />
        <Route path="breadandgrains" element={<BreadAndGrains />} />
        <Route path="snacks" element={<Snacks />} />
      </Routes>
    </div>
  );
};

export default GroceryList;
