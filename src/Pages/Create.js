import React from "react";
import "./Create.css";
import { useState } from "react";
import logo from "../img/RV2.png";
import { Component } from "react";
import List from "../Components/List";
import Randomdata from "../Components/List";

function Create() {
  const [Name, setName] = useState("");
  const [Type, setType] = useState("UNIPEDAL");
  const [openList, setOpenList] = useState(false);
  const [robotName, setRobotName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const robot = { Name, Type };
  };
  function SubmitButton() {
    if (Name && Type) {
      return (
        <button
          type="submit"
          onClick={() => {
            setOpenList(true);
          }}
        >
          Create Robot
        </button>
      );
    } else {
      return <button disabled> Create Robot</button>;
    }
  }

  return (
    <div className="create">
      <img className="logo" src={logo} />
      <h2> Enter A Robot Name</h2>
      <form onSubmit={handleSubmit}>
        <label>Robot Name</label>
        <input
          type="text"
          required
          value={Name}
          placeholder="Robot Name"
          className="text-in"
          onChange={(e) => setName(e.target.value)}
        />
        <h2> Select Robot Type </h2>
        <label>Robot Type</label>

        <select
          required
          value={Type}
          className="text-in"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="UNIPEDAL">Unipedal</option>
          <option value="BIPEDAL">Bipedal</option>
          <option value="QUADRUPEDAL">Quadrupedal</option>
          <option value="ARACHNID">Arachnid</option>
          <option value="RADIAL">Radial</option>
          <option value="AERONAUTICAL">Aeronautical</option>
        </select>
        <SubmitButton />
        {openList && <List />}
      </form>
    </div>
  );
}

export default Create;
