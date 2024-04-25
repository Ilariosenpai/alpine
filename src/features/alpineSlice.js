import { createSlice } from '@reduxjs/toolkit'
import pureblanc from '../configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg'
import jantestandard from '../configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg'

const initialState = {

    version: 'pure',
    price:54700,
    color: {
        name: 'white',
        price: 0,
        image:pureblanc
    
    },

    jantes: {
        name: 'Standard',
        price: 0,
        image: jantestandard
    },



}

export const alpineSlice = createSlice({
  name: 'alpine',
  initialState,
  reducers: {
   changeColor: (state, action) => {
    console.log(action.payload);
    state.color = action.payload;
   },
    changeJantes: (state, action) => {
     console.log(action.payload);
     state.jantes = action.payload;
    
   
  }
}
})

// Action creators are generated for each case reducer function
export const { changeColor , changeJantes } = alpineSlice.actions

export default alpineSlice.reducer