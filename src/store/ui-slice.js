import {createSlice} from '@reduxjs/toolkit'

export const sliceUi = createSlice({
    name:'ui',
    initialState: {isCartVisible: false},
    reducers:{
        toggle(state){
            state.isCartVisible = !state.isCartVisible
}
             }
})


export const actionUi = sliceUi.actions

export default sliceUi;
