import React from "react";
import { IOnlyName } from '../App';
import '../style/main.scss';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface IProps {
  names: IOnlyName[];
}


const ListOfNames: React.FC<IProps> = ({ names }) => {

  const [selectedNs, setSelectedNs] = useLocalStorage<any>('selected', [])

  const addHandler = (e: any): void => {
    const arr: any = [...selectedNs, e.target.dataset.name]
    const pureNamesSet = new Set();
    arr.map((n : string) => pureNamesSet.add(n));
    const pureNames : any = Array.from(pureNamesSet);
    console.log(pureNames)
    setSelectedNs(pureNames)
  }
  const deleteHandler = (e: any): void => {
    setSelectedNs(selectedNs.filter((n: string )=> n !== e.target.dataset.name))
  }
  return (
    <div className="results-container">
      <div className="results-list">
        {names.map((name) => (
          <div data-name={`${name}`} onClick={(e) => addHandler(e)} key={`resultName-${name}`}>
            {name}
          </div>
        ))
        }
      </div>
      <div className="results-added-names">
        {selectedNs.map((name :string, index : number) => (
          <div data-name={`${name}`} onClick={(e) => deleteHandler(e)} key={`selName-${name}`}>
            {name}
          </div>
        ))}
      </div>

    </div>
  );
};
export default ListOfNames;
