import { createStore } from "redux";
const initState={
    onVisiblePopup:true,
    isLogged:false
}

const reducer= (state=initState,action) =>{
    switch (action.type) {
        case 'setVisiblePopup':
            return {...state,onVisiblePopup:action.payload}
        case 'login':
            return {...state,isLogged:true}
        
        case 'logout':
            return {...state,isLogged:false}
            
    
        default: return state
    }

}

const store= createStore(reducer)
export default store