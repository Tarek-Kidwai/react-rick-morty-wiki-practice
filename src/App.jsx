// functional components
// import export
// the theory is 1 file =  1 function / 1 UI
// 1 file for delete button
// 1 file for edit btn
// 1 file for adding task btn
// 1 file for rendering the task list
// how do you join and compile these files together ?
// we  use the import export feature es6 js
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  var name = "Someone";

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => console.log(res));
  }, []);

  // useEffect(
  //   ()=>{},
  //   []
  // )

  return <div className="">Hello {name}</div>;
};

export default App;
