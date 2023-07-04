// initial configuration
export const initialState = {
  basket: [],
}

// Selector
export const getBasketTotal = (basket) =>
  // 'reduce' - iterates the basket and tallies up the total
  basket?.reduce((amount, item) => item.price + amount, 0)

// 'state' - state of the application
// 'action' - what are you trying to do
const reducer = (state, action) => {
  switch (action.type) {
    // Add item
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      }

    // Delete item
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

      let newBasket = [...state.basket]

      if (index >= 0) {
        // Cut out that particular element of that 'index'
        newBasket.splice(index, 1)
      } else {
        console.warn(`Can't remove product (id : ${action.id}) as its not in basket!`)
      }

      return {
        ...state,
        basket: newBasket,
      }

    // Default
    default:
      return state
  }
}

export default reducer

// The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.
// The useReducer Hook returns the current state and a dispatch method.
