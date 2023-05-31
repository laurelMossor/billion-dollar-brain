//** This is one way to generate the Enum of the game places */
export const GamePlaces = {
    INTRO: 'intro',
    // The spread operator (...) can be used with computed properties to dynamically create the object keys.
    ...Array.from({length: 10}, (_, i) => `q${i+1}`).reduce((acc, cur) => ({...acc, [cur.toUpperCase()]: cur}), {})
};

// In this example, Array.from({length: 10}, (_, i) => q${i+1}) creates an array of 10 elements ('q1', 'q2', ..., 'q10').

// The reduce() function then transforms this array into an object, with keys and values equal to the elements of the array.

// The result of the reduce() function is then spread into the GamePlaces object, effectively adding 10 more properties to it.