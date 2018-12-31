import React from 'react';
import {render} from 'react-dom';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();
    goToStore = (event) => {
        /* 1. this will stop the form to submit*/
        event.preventDefault();
        /* 2. Get input from text */
        const storeName= this.myInput.value;
        console.log(storeName);
        // 3. change the page  store to store/ input
        this.props.history.push(`/store/${storeName}`)
    };
    render() {
        console.log("clicked");

        return (
            <form className={"store-selector"} onSubmit={this.goToStore}>
                <h2>Please enter a Store </h2>
                <input type="text" ref={this.myInput}
                       required
                       placeholder="Store Name"
                       defaultValue={getFunName()}/>
                <button  type="submit">Visit Store --></button>
            </form>
        )
    }
    componentDidMount() {
        console.log("Mounted");
        this.myInput.current.focus();
    }
}
export default StorePicker;