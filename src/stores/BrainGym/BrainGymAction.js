import * as actionTypes from './BrainGymTypes'

export const  getAllBrainGym =(data) => {
    return {
      type: actionTypes.GET_ALL_BRAIN_GYM,
      payload : data
   
    }

  }
  
