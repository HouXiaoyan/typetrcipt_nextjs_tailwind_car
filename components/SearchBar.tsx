"use client";
import React from "react";
import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");

  const handelSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handelSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
      </div>
    </form>
  );
}
