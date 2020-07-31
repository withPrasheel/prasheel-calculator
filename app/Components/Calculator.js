import React from 'react'

export default  class Calculator extends React.Component {
    constructor(){
        super()
        this.state = {
            value: ['',''],
            operator: ''
        },
    this.clearAll = this.clearAll.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateOpertor = this.updateOperator.bind(this);
    this.backspace=this.backspace.bind(this);
    }

    backspace(){
        if(this.state.operator=='')
        {
            let value0 = this.state.value[0]
            let len = value0.length
            this.setState(({value})=>({
                value: [value0.substring(0,len-1),value[1]]
            }))
        }
        else
        {
            let value1 = this.state.value[1]
            let len = value1.length
             this.setState(({value})=>({
                 value: [value[0],value1.substring(0,len-1)]
            }))
        }
        
    }

    clearAll() {
        console.log(this.state);
        this.setState({
            value: ['',''],
            operator:''
        })
    }
    updateOperator(operatorSymbol){
        this.setState(({operator})=>({
            operator: operatorSymbol 
        }))
    }

    calculate(){
        console.log(parseFloat(this.state.value[0]))
        console.log(parseFloat(this.state.value[1]))
        switch(this.state.operator)
        {
            case '+': this.setState(({value})=>({
                value: [(parseFloat(value[0])+parseFloat(value[1])).toString(),'']
            }))
            break;
            case '-': this.setState(({value})=>({
                value: [(parseFloat(value[0])-parseFloat(value[1])).toString(),'']
            }))
            break;
            case '*': this.setState(({value})=>({
                value: [(parseFloat(value[0])*parseFloat(value[1]).toString()),'']
            }))
            break;
            case '/': this.setState(({value})=>({
                value: [(parseFloat(value[0])/parseFloat(value[1])).toString(),'']
            }))
            break;
        }
        this.state.operator=''
    }

    updateState(val) {
        if(this.state.operator=='')
        {
            if(Number.isInteger(val))
            {
                this.setState(({value})=>({
                    value: [value[0]+val,value[1]]
                }))
            }
            else {
                this.setState(({value})=>({
                    value: [value[0]+'.',value[1]]
            }))}
        }
        else 
        {
            if(Number.isInteger(val))
            {
                this.setState(({value})=>({
                    value: [value[0],value[1]+val]
                }))
            }
            else {
                this.setState(({value})=>({
                    value: [value[0],value[1]+'.']
            }))}
        }
    }

    render(){
        return  (
            <div className="main">
            
                <div className="main-calc">
                    <div className="display-screen">{this.state.value[0]} {this.state.operator} {this.state.value[1]}</div>
                    <button className="button-style color-3 clear" 
                        onClick={this.clearAll}>C</button>
                    <button className="button-style color-3 backspace" 
                        onClick={this.backspace}>&#8592;</button>
                    <button className="button-style color-2"
                        onClick={()=>(this.updateOperator('/'))}>/</button>
                    <button className="button-style color-1" 
                        onClick={()=>(this.updateState(7))}>7</button>
                    <button className="button-style color-1"
                        onClick={()=>(this.updateState(8))}>8</button>
                    <button className="button-style color-1"
                        onClick={()=>(this.updateState(9))}>9</button>
                    <button className="button-style color-2"
                        onClick={()=>(this.updateOperator('*'))}>*</button>
                    <button className="button-style color-1"
                        onClick={()=>(this.updateState(4))}>4</button>
                    <button className="button-style color-1"
                        onClick={()=>(this.updateState(5))}>5</button>
                    <button className="button-style color-1"
                        onClick={()=>(this.updateState(6))}>6</button>
                    <button className="button-style color-2"
                        onClick={()=>(this.updateOperator('-'))}>-</button>
                    <button className="button-style color-1"
                        onClick={()=>(this.updateState(1))}>1</button>
                    <button className="button-style color-1"
                        onClick={()=>(this.updateState(2))}>2</button>
                    <button className="button-style color-1"
                        onClick={()=>(this.updateState(3))}>3</button>
                    <button className="button-style color-2"
                        onClick={()=>(this.updateOperator('+'))}>+</button>
                    <button className="button-style button-zero color-1"
                        onClick={()=>(this.updateState(0))}>0</button>
                    <button className="button-style color-1"
                        onClick={()=>(this.updateState('.'))}>.</button>
                    <button className="button-style color-2"
                        onClick={()=>(this.calculate())}>=</button>

                </div>
            </div>
        )
    }
}

//<h1 className="heading">Calculator</h1>