import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';



interface OtherStateType {
    level: string;
    lang: string;
    studLang: string
}

const initialState: OtherStateType = {
    level: '',
    lang: '',
    studLang: ''
}

export const counterSlice = createSlice({
    name: "other",
    initialState,
    reducers: {
        newLevel(state, action: PayloadAction<string>){
            state.level = action.payload
        },
        newLang(state, action: PayloadAction<string>){
            state.lang = action.payload
        },
        newStudLang(state, action: PayloadAction<string>){
            state.studLang = action.payload
        }
    }
})

export default counterSlice.reducer