import React from 'react';

interface IProps {
    value : any;
    onChange: any;
}

const Autocomplete : React.FC<IProps> = ({ value, onChange }) => {

    return (
        <React.Fragment>
            <form>
                <input 
              placeholder="name"
              type="text"
              value={value}
              onChange={onChange}
              />
            </form>
        </React.Fragment>
    )
}
    export default Autocomplete;