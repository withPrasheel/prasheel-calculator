import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Calculator from './Components/Calculator' 

class App extends React.Component {
    render(){
        return (
            <div>
                    <Calculator />
            </div>

        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)