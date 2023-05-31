import { create } from 'zustand'
import Game from '../pages/game'

// const useStore = create((set) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//   }))

export const useStore = create(set => ({
    intro: {
        place: "intro",
        hostText: "Hello everyone! Welcome to The Billion Dollar Brain. Are you ready to get started?",
        onComplete: () => console.log("all done"),
        textCompleted: false,
        isAnswered: false
    },
    q1: {
        place: "q1",
        hostText: "This is question 1? Good job!",
        onComplete: () => console.log("ALL DONE q1!"),
        textCompleted: false, 
        isAnswered: false
    }
}))
