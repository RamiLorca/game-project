import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Tests {
    tests: [
        {
          name: "Test 1",
          percentageRight: 85,
          dateTaken: "2023-08-15"
        },
        {
          name: "Test 2",
          percentageRight: 72,
          dateTaken: "2023-08-16"
        },
        {
          name: "Test 3",
          percentageRight: 94,
          dateTaken: "2023-08-17"
        },
        {
          name: "Test 4",
          percentageRight: 60,
          dateTaken: "2023-08-18"
        },
        {
          name: "Test 5",
          percentageRight: 78,
          dateTaken: "2023-08-19"
        },
        {
          name: "Test 6",
          percentageRight: 91,
          dateTaken: "2023-08-20"
        },
        {
          name: "Test 7",
          percentageRight: 68,
          dateTaken: "2023-08-21"
        },
        {
          name: "Test 8",
          percentageRight: 53,
          dateTaken: "2023-08-22"
        },
        {
          name: "Test 9",
          percentageRight: 88,
          dateTaken: "2023-08-23"
        },
        {
          name: "Test 10",
          percentageRight: 76,
          dateTaken: "2023-08-24"
        },
        {
          name: "Test 11",
          percentageRight: 98,
          dateTaken: "2023-08-25"
        },
        {
          name: "Test 12",
          percentageRight: 45,
          dateTaken: "2023-08-26"
        },
        {
          name: "Test 13",
          percentageRight: 83,
          dateTaken: "2023-08-27"
        },
        {
          name: "Test 14",
          percentageRight: 70,
          dateTaken: "2023-08-28"
        },
        {
          name: "Test 15",
          percentageRight: 79,
          dateTaken: "2023-08-29"
        }
            ];
}

export interface TestState {
    tests: Tests | null;
}

const initialStateValue: TestState = {
    tests: null,
};

export const testSlice = createSlice({
    name: 'test',
    initialState: initialStateValue,
    reducers: {
        setTests: (state, action: PayloadAction<Tests>) => {
            if(state.tests){
                state.tests = action.payload;
            }
        },
    },
});

export const { setTests } = testSlice.actions;

export default testSlice.reducer;