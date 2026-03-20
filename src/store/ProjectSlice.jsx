import { arrayMove } from "@dnd-kit/sortable";
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
            const project = state.projects.find(project => project.project_id === action.payload.project_id);
            
            if (!project) return;

            project.project_name = action.payload.project_name;
            project.description = action.payload.description;

            localStorage.setItem("projects" , JSON.stringify(state.projects));
        },
        addTask(state , action){
            const ProjectData = state.projects.find(project => project.project_id === action.payload.project_id);

            if (!ProjectData) return;

            if(action.payload.task){
                ProjectData.tasks.push(action.payload.task);
            }
            localStorage.setItem("projects" , JSON.stringify(state.projects));  
        },
        RemoveTask(state , action){
            const project = state.projects.find(project => project.project_id === Number(action.payload.task.project_id));

            if(!project) return ;

            project.tasks = project.tasks.filter(task => task.task_id !== action.payload.task.task_id )

            localStorage.setItem("projects", JSON.stringify(state.projects));
        },
        EditTask(state , action){
            const project = state.projects.find(project => project.project_id === Number(action.payload.updatedTask.project_id))

            if(!project) return ;

            const task = project.tasks.find(task => task.task_id === action.payload.updatedTask.task_id);

            if(!task) return ;
            
            task.title = action.payload.updatedTask.title;
            task.description = action.payload.updatedTask.description;
            task.priority = action.payload.updatedTask.priority;
            task.status = action.payload.updatedTask.status;
            task.dueDate = action.payload.updatedTask.dueDate;

            localStorage.setItem("projects", JSON.stringify(state.projects));
            
        },
        MoveTask(state , action){
            const {task_id , status} = action.payload ;

            state.projects.forEach(project => {
                const task = project.tasks.find(task => task.task_id === task_id);

                if(task){
                    task.status = status ;
                }
            });

            localStorage.setItem("projects" , JSON.stringify(state.projects));
        },
        ReOrder(state , action){
            const {activeID , overID } = action.payload;

            const project = state.projects.find(project => project.tasks.some(task => task.task_id === activeID));

            if(!project) return ;

            const tasks = project.tasks;

            const oldIndex = tasks.findIndex(task => task.task_id === activeID);
            const newIndex = tasks.findIndex(task => task.task_id === overID);

            if(oldIndex === -1 || newIndex === -1) return;

            project.tasks = arrayMove(tasks , oldIndex , newIndex)

            localStorage.setItem("projects" , JSON.stringify(state.projects));
        }
    }
})

export const projectActions = ProjectSlice.actions;

export default ProjectSlice.reducer ;