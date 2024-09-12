import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserThunks from '../thunks/UserThunks';
import UserAuthenticatedThunk from '../thunks/MeThunk';

interface AuthState {
    token: string | undefined;
    userData: any | undefined;
}

const initialState: AuthState = {
    token: undefined,
    userData: undefined,
};

const userAuth = UserThunks.getInstance();
const userAuthenticatedThunk = UserAuthenticatedThunk.getInstance();

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

        setUserData: (state: AuthState, action: PayloadAction<any>) => {
            return {
                ...state,
                userData: action.payload,
            };
        },
    },

    extraReducers: (builder) => {
        builder.addCase(userAuth.Login.fulfilled, (state, action) => {

            const token = action.payload;

            return {
                ...state,
                token: token,
            }
        });

        builder.addCase(userAuthenticatedThunk.getMe.fulfilled, (state, action) => {
            return {
                ...state,
                userData: action.payload
            }
        });
    }
});

export const { setToken } =
    authSlice.actions;

export default authSlice.reducer;
