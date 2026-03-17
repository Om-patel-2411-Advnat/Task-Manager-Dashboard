import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: JSON.parse(localStorage.getItem("projects")) || [] ,
}

const ProjectSlice = createSlice({
    name : 'projects',
    initialState ,
    reducers : {
        addProject(state , action){
            state.projects.push(action.payload);
            localStorage.setItem("projects" , JSON.stringify(state.projects))
        }
    }
})

export const projectActions = ProjectSlice.actions;

export default ProjectSlice.reducer ;