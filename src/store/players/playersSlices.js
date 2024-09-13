import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:"shobu",
  lastName: "power",
  league:"Spain",
  isSelected: false,
  listOfLeagues: [],
}

export const playersSlices = createSlice({
  
   name: 'players',

  initialState,

  reducers: {
    getPlayersList: (state, action) => {
      state.name = action.payload;
    },
    setLeagueList:(state, action) => {
        state.league = action.payload;
    },
    setLastName: (state, action ) => {
        state.lastName = action.payload;
    },
    addLeagueToList: (state, action) => {
        state.listOfLeagues.push( action.payload )
    },
    isSelectedLeague:(state) => {
        state.isSelected = true;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getPlayersList, setLeagueList, setLastName, addLeagueToList, isSelectedLeague } = playersSlices.actions

//export default playersSlices.reducer