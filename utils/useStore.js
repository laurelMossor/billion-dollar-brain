import { create } from 'zustand'

// const useStore = create((set) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//   }))

export const useStore = create(set => ({
    gameStates: {
        intro: {
            place: "intro",
            hostText: "Hello everyone! Welcome to The Billion Dollar Brain. Are you ready to get started?",
            
            // onComplete: updateTextCompleted(place),
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
    },
    currentGameState: "intro",
    getPlace: () => null,
    updateTextComplted: () => null,
    determinePlace: () => null
}))
