import React, { PureComponent } from 'react'

export default class PureCounterComponent extends PureComponent {
    constructor(){
        super()
        this.state={
            count:0,
            toggle:true
        }

    }
    handleToggle(){
        if(this.state.toggle===false){
            this.setState({
                toggle:true
            })
        }
        else{
            this.setState({
                toggle:false
            })
        }
    }
    handleCounter(){
        if(this.state.toggle===true){
            this.setState({
                count:this.state.count+1
            })
        }
        else{
            this.setState({
                count:this.state.count
            })
        }
    }

  render() {
    console.log("this is a pure component")
    return (
      <div>
        <h1>Simple Component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={()=>this.handleToggle()}>Set Toggle</button>
        <button onClick={()=>this.handleCounter()}>Counter</button>
      </div>
    )
  }
}
