import React from "react";
import { Link } from "react-router-dom";

export const DashboardScreen = () => {
  return (
    <div class="container">
      <Link to="books" class="item">
        <div class="module hero">
          <h4>BookStore</h4>
        </div>
      </Link>
      <Link to="laptops" class="item">
        <div class="module hero">
          <h4>LaptopStore</h4>
        </div>
      </Link>
    </div>
  );
};
