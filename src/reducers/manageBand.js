import uuid from 'uuid'

export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
      const band = {
        id: uuid(),
        name: action.name
      }
      // console.log(band)
      return {...state, bands: [...state.bands, band]}
      case "DELETE_BAND":
        // console.log('delete action')
        // debugger
        const bandID = action.id
        const bandsArr = state.bands.filter(band=> band.id !== bandID)
        return {bands: [...bandsArr]}
    default:
      return state
  
  }
};
