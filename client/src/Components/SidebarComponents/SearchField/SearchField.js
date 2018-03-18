import React from 'react';
import classes from './SearchField.css';
  
const searchField = (props) => {
    const style ={
        inputBox : {
            // border: '1px solid blue',
            width: '75%',
            border: '1px solid #eee',
            boxShadow: '0 2px 2px #ccc',
            borderRadius:'5px',
        },
        searchComponents:{
            marginBottom:'20px'
        }
      };

    return (
        <form onSubmit={props.handleSubmit} style={style.searchComponents}>
            <label>
                <div>Search Entries:</div>
                <input type="text" style={style.inputBox} value={props.value} onChange={(event)=>props.onSearchInput(event.target.value)} />
            </label>
            <div>
                <input type="submit" value="Search" />
            </div>
        </form>
    );
};

export default searchField;

