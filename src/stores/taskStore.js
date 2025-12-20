import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../services/axiosClient";

export const useTaskStore = defineStore('task', ()=> {
    const tasks   = ref([]) ;
    const loading = ref(false);
    
    const createTask = async(payload)=>{        
        const res = await apiClient.post('/tasks',payload);
        tasks.value.unshift(res.data);
    }

   // get tasks by status

   const fetchTaskByStatus = async(status= 'new')=>{            
        tasks.value = [] ;
        loading.value = true ;
        try{
            const res = await apiClient.get(`/filter-by-status?status=${status}`) ;          
            tasks.value = res.data.data.data ;
        }finally{
            loading.value = false;
        }
   }

   // get single task by id

   const getTaskById = async(id) =>{
    const res = await apiClient.get(`/tasks/${id}`) ;
    return res.data.data ;
   }

   //update task

   const updateTask = async(id,payload) => {
        const res = await apiClient.put(`/tasks/${id}`,payload);
        console.log(res.data.data);
        
        const index = tasks.value.findIndex((t)=>t.id===id) ;
        if(index !==-1) tasks.value[index] = res.data ;
        
   }

   //delete task

   const deleteTask = async(id) =>{
        alert( id);
        const res = apiClient.delete(`/tasks/${id}`) ;
        tasks.value = tasks.value.filter((t)=>t.id !==id) ;
   }

    return {
      tasks,
      createTask,
      loading,
      fetchTaskByStatus,
      getTaskById,
      updateTask,
      deleteTask
    };
})  ;