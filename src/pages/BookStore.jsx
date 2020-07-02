import React from "react";
import { Search } from "../components/Search.component";

const BookStore = () => (
  <>
    <Search></Search>
    <hr />
    <br />
    <div class="container">
      <a routerLink="['/books', item.id]" class="item">
        <div class="module hero">
          <h4>{item.title}</h4>
        </div>
      </a>
    </div>
  </>
);
