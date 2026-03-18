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
        },
        removeProject(state , action){
            state.projects = state.projects.filter(project => project.project_id !== action.payload);
            localStorage.setItem("projects", JSON.stringify(state.projects));
        },
        editProject(state , action){
            const index = state.projects.findIndex(project => project.project_id === action.payload.project_id);
            
            if (index === -1) return;

            state.projects[index].project_name = action.payload.project_name;
            state.projects[index].description = action.payload.description;

            localStorage.setItem("projects" , JSON.stringify(state.projects));
        },
        addTask(state , action){
            const index = state.projects.findIndex(project => project.project_id === action.payload.project_id);

            if (index === -1) return;
            
            const ProjectData = JSON.parse(JSON.stringify(state.projects[index]));
            const tasks =  ProjectData.tasks;

            if(action.payload.task){
                tasks.push(action.payload.task);
            }
            state.projects[index] = ProjectData;

            localStorage.setItem("projects" , JSON.stringify(state.projects));
        }
    }
})

export const projectActions = ProjectSlice.actions;

export default ProjectSlice.reducer ;