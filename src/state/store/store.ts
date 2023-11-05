import {combineReducers, legacy_createStore} from 'redux';
import {bubbleReducer} from "../reducers/bubble-reducer";


const rootReducer = combineReducers({
    bubble: bubbleReducer,
})

export const store = legacy_createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>


// это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;