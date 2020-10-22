export const initialState = {
    basket: []
};

function reducer(state, action) {
  console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
        // Logic
        return { 
          ...state,
          basket: [...state.basket, action.item]
        }
        case 'REMOVE_FROM_BASKET':
        // Logic
        let newBasket = [...state.basket];
        const index = state.basket.findIndex((bi) => bi.id === action.id)
        if (index >= 0) {
          newBasket.splice(index,1);
        }
        return { ...state, basket: newBasket}
        default:
            return state;        
    }
}

export default reducer;