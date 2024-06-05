import {
    createContext,
    useContext,
    useReducer,
    useState,
    useEffect,
} from 'react';
import {careerReducer} from "./Reducer";
const Career = createContext();
const Context = ({ children }) => {
    const [state, dispatch] = useReducer(careerReducer, {
        services: [],
        cart: [],
        modal: false,
    });
    return (
        <Career.Provider
            value={{ state, dispatch }}
        >
            {children}
        </Career.Provider>
    );
}
export default Context;
