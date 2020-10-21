export const initialState = {
    basket: []
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
        // Logic
          break;
        case 'REMOVE_FROM_BASKET':
        // Logic
          break;
        default:
            return state;        
    }
}

export default reducer;