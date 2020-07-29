import React from 'react'

export default  class Calculator extends React.Component {


    render(){
        return  (
            <div className="main">
                <h1 className="heading">Calculator</h1>
                <div className="main-calc">
                    <div className="display-screen">Nothing</div>
                    <button className="button-style color-2">&radic;</button>
                    <button className="button-style color-3">&larr;</button>
                    <button className="button-style color-3">C</button>
                    <button className="button-style color-2">/</button>
                    <button className="button-style color-1">7</button>
                    <button className="button-style color-1">8</button>
                    <button className="button-style color-1">9</button>
                    <button className="button-style color-2">*</button>
                    <button className="button-style color-1">4</button>
                    <button className="button-style color-1">5</button>
                    <button className="button-style color-1">6</button>
                    <button className="button-style color-2">-</button>
                    <button className="button-style color-1">1</button>
                    <button className="button-style color-1">2</button>
                    <button className="button-style color-1">3</button>
                    <button className="button-style color-2">+</button>
                    <button className="button-style button-zero color-1">0</button>
                    <button className="button-style color-1">.</button>
                    <button className="button-style color-2">=</button>

                </div>
            </div>
        )
    }
}