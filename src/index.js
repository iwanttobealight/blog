import React from 'react';
import ReactDOM from 'react-dom'

const HelloMessage = ({ name }) => {
    return <div>
        <div className="container">
            <h1>Hello {name}</h1>
        </div>
    </div>
}

let App = document.getElementById("root");

ReactDOM.render(<HelloMessage name="world" />, App);