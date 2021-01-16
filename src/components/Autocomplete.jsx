import React from 'react';

const Autocomplete = ({ value, onChange }) => {

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