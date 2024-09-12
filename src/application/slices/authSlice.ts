import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | undefined;
}

const initialState: AuthState = {
    token: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state: AuthState, action: PayloadAction<string>) => {
            return {
                ...state,
                token: action.payload,
            };
        },
    },
});

export const { setToken } =
    authSlice.actions;

export default authSlice.reducer;
