import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterValue : '',
    sortingValue : '' ,
    searchValue : '' ,
}

const FilterSlice = createSlice({
    name : 'filter-slice',
    initialState,
    reducers : {
        setFilterValue(state , action ){
            state.filterValue = action.payload;
        },
        setSortingValue(state , action){
            state.sortingValue = action.payload ;
        },
        setSearchValue(state , action){
            state.searchValue = action.payload ;
        }
    }
})

export const FilterSortingAction = FilterSlice.actions ;

export default FilterSlice.reducer;