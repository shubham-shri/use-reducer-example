import React, { useReducer } from 'react'
import './App.css'

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...new Set([...state.cartItems, action.payload])],
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item !== action.payload),
        ],
      }
    default:
      return state
  }
}
const INITIAL_STATE = {
  cartItems: [],
}
function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <div className="App">
      <div>
        <ul>
          <li onClick={() => dispatch({ type: 'ADD_TO_CART', payload: 'cap' })}>
            cap
          </li>
          <li
            name="bag"
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: 'bag' })}
          >
            bag
          </li>
          <li
            name="hat"
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: 'hat' })}
          >
            hat
          </li>
        </ul>
      </div>
      <ul>
        {state.cartItems.map((item) => (
          <li
            onClick={(e) =>
              dispatch({ type: 'REMOVE_FROM_CART', payload: `${item}` })
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
