import React, { Component } from 'react';
import classNames from "classnames";
import "./TodoItem.css";
class TodoItem extends Component {
   // constructor(){
   //    super();
      
   // }
   render() {
      const { item, onClick } = this.props;
      return ( 
         <div className = {classNames('TodoItem', {
            'TodoItem-complete': item.isComplete })} 
            onClick={ onClick }
         >
            <div className = {
               classNames('nf-checkedImg',{
                  'nf-checkedImg-complete': item.isComplete
               })
            }> </div>
            <p>{ item.title }</p>
            {
               item.isComplete &&
               <div className="title-complete">
                  (Đã hoàn thành)
               </div>
            }
         </div>
      );
   }
}

export default TodoItem;