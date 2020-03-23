import React from 'react';
import ReactDom from 'react-dom'
import "./index.css"
import App from './App'



function Main(){
    return (
        <div>
            <App/>
        </div>
    );
};




ReactDom.render(<Main />, document.getElementById("root"));