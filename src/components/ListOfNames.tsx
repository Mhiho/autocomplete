import React, { useState } from "react";
import { IOnlyName } from '../App';
import '../style/main.scss';

interface IProps {
  names: IOnlyName[];
}


const ListOfNames: React.FC<IProps> = ({ names }) => {

  const [selected, setSelected] = useState([]);

  const addHandler = (e: any): void => {
    const arr: any = [...selected, e.target.dataset.name]
    setSelected(arr)
  }
  const deleteHandler = (e: any): void => {
    setSelected(selected.filter(n => n !== e.target.dataset.name))
  }

  return (
    <div className="results-container">
      <div className="results-list">

        {names.map((name, index) => (
          <div data-name={`${name}`} onClick={(e) => addHandler(e)} key={`resultName-${name}`}>
            {name}
          </div>
        ))
        }
      </div>
      <div className="results-added-names">
        {selected.map((name, index) => (
          <div data-name={`${name}`} onClick={(e) => deleteHandler(e)} key={`selName-${name}`}>
            {name}
          </div>
        ))}
      </div>

    </div>
  );
};
export default ListOfNames;
