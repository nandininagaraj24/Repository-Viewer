/*sets view by category for Repository table*/
export const setOrderCategory = (orderCategory) => {
    return {
        type: "SET_ORDER_CATEGORY",
        orderCategory
    }
};
/*sets sort direction for Repository table*/
export const setSortDirection = (sortDirection) => {
    return {
        type: "SET_SORT_DIRECTION",
        sortDirection
    }
};

const initialState = {
    orderCategory: "forks",
    sortDirection: "desc"
};

export const repoReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_ORDER_CATEGORY": return {
            ...state,
            orderCategory: action.orderCategory
        };
        case "SET_SORT_DIRECTION": return {
            ...state,
            sortDirection: action.sortDirection
        };
        default: break;
    }
    return state;
};

export default repoReducer;