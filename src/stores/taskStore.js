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

    return { tasks, createTask,loading, fetchTaskByStatus };
})  ;