import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemId)=>{

        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }

    const removeFromCart= (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    // const addToCart = (itemId) => {
    //     setCartItems((prev) => ({
    //         ...prev,
    //         [itemId]: (prev[itemId] || 0) + 1 // Increment quantity or set to 1 if not present
    //     }));
    // };

    // const removeFromCart = (itemId) => {
    //     if (cartItems[itemId] > 1) {
    //         setCartItems((prev) => ({
    //             ...prev,
    //             [itemId]: prev[itemId] - 1 // Decrease quantity if > 1
    //         }));
    //     } else {
    //         const { [itemId]: removedItem, ...rest } = cartItems;
    //         setCartItems(rest); // Remove item if quantity becomes 0
    //     }
    // };

    useEffect(()=>{
        console.log(cartItems);

    },[cartItems])

    const contextValue = {
         food_list,
         cartItems,
         setCartItems,
         addToCart,
         removeFromCart

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;