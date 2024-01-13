import React, {useState, useReducer} from 'react'
import { useRef } from 'react'
import Todoitem from './Todoitem.jsx'

const state = [
    {
        inputData: "Hello everyone this is Shaswath 😎",
        hidden: false
    }
]

function toDoReducer(state, action){
    switch (action.type) {
        case "ADD_ITEMS":
            return [...state, {
                inputData: action.payload,
                hidden: false
            }]
        case "CHANGED_ITEM":
            return state.map((e, i) => i == action.payload ? {...e, hidden:!e.hidden} : e)
    }
    return state
}

function ToDo() {

    const [toDoData, dispatch] = useReducer(toDoReducer, state)

    const returnedData = useRef(null)
    console.log(returnedData)
  return (
    <div>
        <input
    type="text"
    placeholder="Type something"
    ref={returnedData}
    onKeyDown={(e) => {
        if (e.key === "Enter") {
            dispatch({ type: "ADD_ITEMS", payload: e.target.value });
            returnedData.current.value = "";
            }
            }}
        />
        <div>{
                toDoData.map((e,i)=>(
                    <Todoitem ele={e} index={i} key={i} dispatch={dispatch} />
                ))
            }
        </div>
        <button onClick={() => {
            returnedData.current.focus()
        }}> TYPE </button>
    </div>
  )
}

export default ToDo