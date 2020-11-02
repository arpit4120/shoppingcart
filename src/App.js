import NavBar from './components/navbar';
import React, { Component } from 'react';
import Counters from './components/counters';
import './App.css';
class App extends Component{
  state = { 
    counters :[
    ]
  };
  handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});

  };
  handleDecrement = counter =>{

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    if(counters[index].value>0)
    {
    counters[index].value--;
    this.setState({counters});}

  };
  handleDelete= counterId=>{
    const counters= this.state.counters.filter( c => c.id!==counterId);
    this.setState({counters:counters});


  };
  handleReset = ()=>{
    console.log("reset turned");
    const counters = this.state.counters.map(c=>{c.value=0;return c;});
    this.setState({ counters})
  };
  handleAddition =() => {
    console.log("addition");

    this.setState(prevState => ({
      counters: [
          ...prevState.counters, 
          {id:prevState.counters.length+1,value:0}
      ]
  }))
  };
  handleDeleteAll = ()=>{
    const counters=[];
    this.setState({counters})
  }
 render(){
  return (
    <React.Fragment>
      <NavBar  totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
    <main className=" container">
      <Counters 
      counters={this.state.counters}
      onDelete={this.handleDelete}
      onAdd={this.handleAddition}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDeleteAll={this.handleDeleteAll}
      />
    </main>
    </React.Fragment>
    

  );
 }
}

export default App;
