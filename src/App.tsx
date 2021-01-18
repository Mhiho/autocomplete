import React, { useState, useEffect } from "react";
import Autocomplete from "./components/Autocomplete";
import { getAllNames } from "./actions/namesAction";
import { useSelector, useDispatch } from "react-redux";
import ListOfNames from "./components/ListOfNames";
import { INamesState } from './reducers/namesReducer';
import { IAppState } from './store';
import { useLocalStorage } from './hooks/useLocalStorage';

export interface IOnlyName {
  name?: string;
  toUpperCase: any;
  indexOf: any;
}

const App: React.FC = () => {

  const [ns, setNs] = useLocalStorage<any>('names', []);
  const [result, setResult] = useState([]);
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  useEffect((): void => {

    if (ns.length > 0) {
      return;
    } else {
      dispatch(getAllNames());
    }
  }, []);

  const preNames: INamesState = useSelector((state: IAppState) => state.namesState);
  useEffect(() => {
    if (ns.length > 0) {
      return;
    } else {
      const fetchedNames: string[] = preNames && preNames.names && preNames.names.map(n => n.name);
      setNs(fetchedNames)
    }
  })
  const changeHandler = (e: any) => {
    setTerm(e.target.value);
    if (e.target.value === "") {
      setResult([]);
    } else if (term.search(/\s/)) {
      const presplitT = e.target.value.split(/\s/);
      const splitT: string[] = presplitT.filter((w: IOnlyName["name"]) => w !== "");
      const obj = new Set();
      console.log(splitT)
      for (let i = 0; i < ns.length; i++) {
        // for (let j = 0; j < splitT.length; j++) {
        if (splitT.length > 0) {
          if (ns[i].toUpperCase().includes(splitT[0].toUpperCase())) {
            obj.add(ns[i]);
          } else {
            obj.delete(ns[i]);
          }
        } else if (splitT.length > 1) {
          if ((ns[i].toUpperCase().includes(splitT[0].toUpperCase()))
            || (ns[i].toUpperCase().includes(splitT[1].toUpperCase()))
          ) {
            obj.add(ns[i]);

          } else {
            obj.delete(ns[i]);

          }
          obj.add(ns[i]);
        } else {

          obj.delete(ns[i]);
        }
      }
      const arr: any = Array.from(obj);
      setResult(arr);
    } else {
      return;
    }
  };
  return (
    <div>
      <main>
        <Autocomplete onChange={(e: any) => changeHandler(e)} value={term} />
        <ListOfNames names={result} />
      </main>
    </div>
  );
};

export default App;
