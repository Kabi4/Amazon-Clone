import * as actionTypes from './../actionType';

const intialState = {
    items: []
}

const basketReducer = (state=intialState,action)=>{
    switch(action.type){
        case actionTypes.ADDITEMTOBASKET:
            let newItems = [...state.items];
            let index = newItems.findIndex((ele)=>{
                return action.payload.item.item.id === ele.item.id;
            });
            if(index!==-1){
                newItems[index].quantity++;
            }else{
                newItems.push(action.payload.item);
            }
            return {
                ...state,
                items: newItems
            };
        case actionTypes.DELETEITEMFROMBASKET:
            let newItems2 = [...state.items];
            let index2 = newItems2.findIndex((ele)=>{
                return action.payload.id === ele.item.id;
            });
            if(index2!==-1){
                if(newItems2[index2].quantity===1){
                    newItems2.splice(index2,1);
                }else{
                    newItems2[index2].quantity--;
                }
            }
            return{
                ...state,
                items: newItems2
            };
        default:
            return state;
    }
};

export default basketReducer;