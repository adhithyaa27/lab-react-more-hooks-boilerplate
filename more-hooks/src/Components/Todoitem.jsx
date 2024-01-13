import React from 'react'

function ToDoItem(props) {

    let {ele, index, dispatch} = props
    let {inputData, hidden} = ele
  return (
    <div className='content'>
      <div id='div2'>
      <h3>{hidden ? "The content is Hidden" : inputData}</h3>
      <button onClick={() => {
        dispatch({type: "CHANGED_ITEM", payload: index})}}>
        Toggle</button>
      </div>
    </div>
  )
}

export default ToDoItem