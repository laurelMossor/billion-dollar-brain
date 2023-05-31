import { create } from 'zustand'

// const useStore = create((set) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//   }))

function createQuestionState(gamePlace, hostText) {
    return {
        gamePlace: place,
        hostText: hostText,
        textCompleted: false,
        isAnswered: false,
    }
}

export const useStore = create(set => ({
    intro: {
        gamePlace: "intro",
        // hostText: "Hello everyone! Welcome to The Billion Dollar Brain. Are you ready to get started?",
        hostText: "Hello everyone!",
        textCompleted: false,
        isAnswered: false
    },
    q1: {
        gamePlace: "q1",
        hostText: "This is question 1? Good job!",
        textCompleted: false, 
        isAnswered: false
    },
    updateTextCompleted: (gamePlace) => 
        set((state) => 
            ({ 
                ...state, 
                [gamePlace]: {...state[gamePlace], textCompleted: true}}))
}))

// export const useStore = create(set => {
//     // Define an empty state object
//     let state = {
//         intro: createQuestionState("intro", "Hello everyone! Welcome"),
//         updateTextCompleted: (place) => set(state => ({
//             ...state,
//             [place]: { ...state[place], textCompleted: true },
//         })),
//     }

//     // Generate 10 questions and add them to the state
//     for(let i = 1; i <= 10; i++) {
//         state[`q${i}`] = createQuestionState(`q${i}`, `This is question ${i}? Good job!`);
//     }

//     return state;
// })