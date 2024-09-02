import { create } from "zustand";

type CounterState = {
    count: number;
    increment:()=> void;
    decrement:()=> void;
    reset:()=> void;
}

export const useCounterStore = create<CounterState>((set) => ({
    count: 0,  //default counter value
    increment:()=> set((state)=> ({count:state.count+1})), //increment count
    decrement:()=> set((state)=> ({count:state.count-1})), //decrement count
    reset:()=> set({count:0}) //reset count to 0
}));
