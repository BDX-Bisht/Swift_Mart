import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from '../Reducer/filterReducer'

const FilterContext = createContext()

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 100,
    }
}

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    // To set Grid View
    const setGridView = () => {
        return dispatch({ type: "SET_GRIDVIEW" })
    }

    // To set List View
    const setListView = () => {
        return dispatch({ type: "SET_LISTVIEW" })
    }

    // Sorting function
    const sorting = (event) => {
        let userValue = event.target.value
        dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }

    // Update the Filters Value
    const updateFilterValue = (event) => {
        let name = event.target.name
        let value = event.target.value
        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })
    }

    // to Clear all the Filters..
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" })
    }

    // to sort the products
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [products, state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }} >
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}

