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
    let splittedTerm : any = e.target.value.toUpperCase().split(' ');
    if (splittedTerm.length < 1) {
      console.log(1)
      setResult([]);
    } else if(splittedTerm.length < 2 ) {
      const arr = ns.filter((n : string) =>  n.toUpperCase().includes(splittedTerm[0]) ?
      n : null )
      setResult(arr);
      console.log(splittedTerm)
    } else if (splittedTerm.length > 1 && splittedTerm[1] !== '') {
      const arr = ns.filter((n : string) =>  n.toUpperCase().search(splittedTerm[0]) > -1 && n.toUpperCase().search(splittedTerm[1]) > -1 ?
      n : null)
      console.log(splittedTerm)
      setResult(arr)
    }
    }
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
