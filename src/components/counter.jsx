import React, { Component } from 'react';
class Counter extends Component {
  
render() { 
    return( 
    <div>
      <input/>
      <span  className= {this.getBadgetClasses()}>{this.props.counter.name} {this.formatcounter()}</span>
      <button
       onClick={() => this.props.onIncrement(this.props.counter)} 
       className="btn btn-secondary btn-sm m-2">
         Increment
         </button>
         <button
       onClick={() => this.props.onDecrement(this.props.counter)} 
       className="btn btn-secondary btn-sm m-2">
         Decrement
         </button>
         <button onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'> 
          delete</button>
    </div>
    );
  }
  getBadgetClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatcounter()
  {
    const {value}=this.props.counter;
    return value ===0 ? "zero" :value;
  
}
}
 
export default Counter;