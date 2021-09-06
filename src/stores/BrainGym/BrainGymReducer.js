import * as actionTypes from './BrainGymTypes'


const initialState = {
    braiGym: [],
    loading: false,
   
  }
  
  const reducer =(state = initialState, action)=> {
    switch (action.type) {
      case actionTypes.SET_ALL_BRAIN_GYM:
        return {
          ...state,
          braiGym: action.payload
       
        }
      case actionTypes.SET_LOADING:
        return{...state, loading: action.payload}
      default:
        return {...state}
    }
  }

  export default reducer;