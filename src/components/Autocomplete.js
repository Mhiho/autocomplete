import React, { useState } from 'react';

const Autocomplete = ({ value, onChange, keyDown }) => {

    return (
        <React.Fragment>
            <form>
                <input
              onKeyDown={keyDown} 
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