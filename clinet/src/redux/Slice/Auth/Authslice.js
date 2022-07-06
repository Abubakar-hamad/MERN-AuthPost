import {createAsyncThunk , createSlice} from  '@reduxjs/toolkit'
import authService from './authService'


const user = JSON.parse(localStorage.getItem('user'))


const initialState = {
    user: user ? user : null,
    isSuccess:false,
    isLoadin:false,
    isError:false,
    message:''
  }

// register

export const register = createAsyncThunk('auth/register' , async(user , thunkAPI)=>{
    try {
        return await authService.register(user)
    } catch (error) {
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
         return thunkAPI.rejectWithValue(message)
    }
})


export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isSuccess=false
            state.isLoadin=false
            state.isError=false
            state.message=''
        }
    },
    extraReducers: (trick) =>{
        trick
        .addCase(register.pending , (state)=>{
            state.isLoadin = true ;
        })
        .addCase(register.fulfilled , (state , action)=>{
            state.isLoadin=false ;
            state.isSuccess= true;
            state.user = action.payload
        })
        .addCase(register.rejected , (state , action)=>{
            state.isLoadin= false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;

        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer