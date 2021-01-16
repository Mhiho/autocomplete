import React, { useState, useEffect } from "react";
import "./App.css";
import Autocomplete from "./components/Autocomplete";
import { getAllNames } from "./actions/namesAction";
import { useSelector, useDispatch } from "react-redux";
import ListOfNames from "./components/ListOfNames";

const App = () => {
  const [result, setResult] = useState([]);
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNames());
  }, [dispatch]);
  const preNames = useSelector((state) => state.namesState);
  const ns = preNames && preNames.names && preNames.names.map((n) => n.name);

  const changeHandler = (e) => {
    setTerm(e.target.value);
    if (e.target.value === "") {
      setResult([]);
    } else if (term.search(/\s/)) {
      const presplitT = e.target.value.split(/\s/);
      const splitT = presplitT.filter((w) => w !== "");
      const obj = new Set();
      console.log(splitT);
      for (let i = 0; i < ns.length; i++) {
        for (let j = 0; j < splitT.length; j++) {
          if (ns[i].toUpperCase().indexOf(splitT[j].toUpperCase()) > -1) {
            obj.add(ns[i]);
          } else {
            obj.delete(ns[i]);
          }
        }
      }
      const arr = Array.from(obj);
      setResult(arr);
    } else {
      const res = ns.filter((name) =>
        name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1
          ? name
          : null
      );
      setResult(res);
    }
  };
  return (
    <div className="App">
      <div className="list">
        <Autocomplete onChange={(e) => changeHandler(e)} value={term} />
        <ListOfNames names={result} />
      </div>
    </div>
  );
};

export default App;
