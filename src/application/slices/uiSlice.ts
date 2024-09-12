
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIStore {
    route: string;
}

const initialState: UIStore = {
    route: '',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setRoute: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                route: action.payload,
            };
        },
    },
});

export const { setRoute } = uiSlice.actions;

export default uiSlice.reducer;
