import React, { Component } from 'react';
import TodoItem from "./components/TodoItem";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      todoItems:[
        { title: 'Mai nghỉ học.', isComplete: false},
        { title: 'Mai đi ăn kem.', isComplete: true},
        { title: 'Tuần sau đóng tiền học.', isComplete: false},
        { title: 'Nộp bản sao tốt nghiệp.', isComplete: true}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  isClicked(item){
    return (event) =>{
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = this.state.todoItems.indexOf(item);
      this.setState({
          todoItems:[
            ...todoItems.slice(0, index),
            {
              ...item,
              isComplete: !isComplete
            },
            ...todoItems.slice(index + 1)  
        ]}
      )
    }
  }
  onKeyUp(event){
    let text = event.target.value;
    if(event.keyCode === 13){
      if(!text) {return};
      text = text.trim();
      if(!text) {return};
      this.setState({
        newItem: '',
        todoItems:[
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })
      text = '';
    }else{
      this.setState({
        newItem: text
      });
    }
  }
  onChange(event) {
      this.setState({
        newItem: event.target.value
      });
  }
  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        <div className="wrapper">
          <div className="header">
            <div className="header-img"></div>
            <input
              onChange={this.onChange}
              value={this.state.newItem}
              onKeyUp={this.onKeyUp} 
              type="text" 
              placeholder="Thêm Công Việc"
              id="input-text"/>
          </div>
          <div className="list-items">
            {
              todoItems.length > 0 &&
              todoItems.map((item, index) => 
                <TodoItem 
                  item={item}  
                  key={index} 
                  onClick={this.isClicked(item)}
                />)
            }
            { todoItems.length === 0 && 'Nothing here.' }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
