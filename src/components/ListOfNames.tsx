import React from "react";
import { IOnlyName } from '../App';

interface IProps {
  names: IOnlyName[];
}


const ListOfNames : React.FC<IProps> = (props) => {

  const {names} = props; 
  return (
    <React.Fragment>
        {names.map((name : IOnlyName, index : number) => (
          <p key={`name-${name} + ${index}`}>{name}</p>
        ))}
    </React.Fragment>
  );
};
export default ListOfNames;
