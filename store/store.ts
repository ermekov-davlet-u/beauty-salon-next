import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
  import counterReducer from './slices/counterSlice';
  import directoryReducer from './slices/directorySlice';
  import { composeWithDevTools } from "redux-devtools-extension";
  
const rootReducer = combineReducers({
  counterReducer,
  directoryReducer
}) 



const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
            serializableCheck: false
            })
    })
}
export const store = setupStore()
  
  export type RootState = ReturnType<typeof rootReducer>
  export type AppStore = ReturnType<typeof setupStore>
  export type AppDispatch = AppStore['dispatch']