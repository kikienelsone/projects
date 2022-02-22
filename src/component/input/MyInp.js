import React from "react";
import classes from './MyInput.module.css'


const MyInp = (props) => {
    return (
        <input className={classes.myInput} {...props} />

    )
}
export default MyInp