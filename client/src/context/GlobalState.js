import { useState, createContext } from 'react'
import UserAPI from './UserAPI'
import CartAPI from './CartAPI'
import ProductAPI from './ProductAPI'
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const state = {
        loading: [loading, setLoading],
        UserAPI: UserAPI(),
        CartAPI: CartAPI(),
        ProductAPI: ProductAPI(),
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}