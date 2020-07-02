import React from "react";
import { Search } from "../components/Search.component";

const LaptopStore = () => (
  <>
    <Search></Search>
    <hr />
    <br />
    <div class="container">
      <a routerLink="['/laptop', item.id]" class="item">
        <div class="module hero">
          <h4>{item.name}</h4>
        </div>
      </a>
    </div>
  </>
);
