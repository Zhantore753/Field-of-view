import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { combineReducers } from "redux";
import main from "./mainReducer";

const rootReducer = combineReducers({
    main: main
});

export type RootState = ReturnType<typeof rootReducer>

const middleware = [thunk];

const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)));

export const store = createWrapper(makeStore);