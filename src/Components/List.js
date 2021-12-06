import React from "react";
import "./List.css";
import data from "../data.json";
import { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Checkmark, ImCheckboxUnchecked } from "react-checkmark";

function List() {
  const [tasks, setTasks] = useState(data);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  var random1 = Math.floor(Math.random() * 5) + 1;

  var random2 = random1 + 5;

  const helloHandeler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(!show);
    }, 2000);
  };

  if (loading) return <Loader type="ThreeDots" />;
  const handleLoader = () => {
    return <Loader />;
  };

  return (
    <div>
      <table className="container">
        <thead>
          <tr>
            <th> Task Description</th>
            <th>Estimated time(in millie seconds)</th>
            <th>
              {" "}
              <button onClick={helloHandeler}>Complete Tasks </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.slice(random1, random2).map((task) => (
            <tr key={task.id}>
              <td> {task.description} </td>
              <td>{task.eta}</td>
              <td>{show && <Checkmark />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
