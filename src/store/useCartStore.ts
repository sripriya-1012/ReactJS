import { create } from "zustand";
import { IProduct } from "../models/IProduct";

type CartState = {
    cartItems: IProduct[];
    addToCart:(item:IProduct) => void;
    removeFromCart: (id: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
    cartItems: [],
    addToCart: (product: IProduct) => {
        console.log("To uodate store, You must call set");
        set((state)=>{
            console.log("Adding to cart");
            return {
                cartItems:[
                    ...state.cartItems,//spreading existing cart items
                    product//adding the new product
                ]
            }
        })
    },
    removeFromCart: (id: number) => {
        console.log("To update store, you must call set");
        set((state) => {
            console.log("Removing from cart");
            return {
                cartItems: state.cartItems.filter(item => item.id !== id) // removing the product by id
            }
        })
    }

}));
