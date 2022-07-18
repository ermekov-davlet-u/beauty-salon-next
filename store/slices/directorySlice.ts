
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IStatus {
    idStatus: number
    statusName: string
}

const initialState: {
    statuses: IStatus[]
} = {
    statuses: []
}


export const directorySlice = createSlice({
    name: "directory",
    initialState,
    reducers: {
        newStatuses(state, action: PayloadAction<IStatus>) {
            state.statuses =  action.payload
        }
    }
})

export default directorySlice.reducer