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
  console.log(preNames);
  const ns = preNames && preNames.names && preNames.names.map((n) => n.name);

  console.log(result);

  const changeHandler = (e) => {
    setTerm(e.target.value);
    if (e.target.value === "") {
      setResult([]);
    } else {
      setResult(
        ns.filter((name) => (name.indexOf(e.target.value) > -1 ? name : null))
      );
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
