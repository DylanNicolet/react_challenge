import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalClickCount : 0,
    counterValue : 0,
    counterBackgroundHue : 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // Increase counter value only if value is less then 72
        increment: (state) => {
            if (state.counterValue < 72) {
                state.counterValue += 1;
                state.totalClickCount += 1;
                state.counterBackgroundHue += 5;
            } else {
                state.totalClickCount += 1;
            }
        },
        // Decrease counter value only if value is more then 0
        decrement: (state) => {
            if (state.counterValue > 0) {
                state.counterValue -= 1;
                state.totalClickCount += 1;
                state.counterBackgroundHue -= 5;
            } else {
                state.totalClickCount += 1;
            }
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;