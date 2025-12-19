import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../services/axiosClient";
import { useRouter } from "vue-router";
import cogoToast from "cogo-toast";

export const useTaskStore = defineStore('task', ()=> {
    const tasks = ref([]) ;
    const createTask = async(payload)=>{
        console.log(payload);
        
        const res = await apiClient.post('/tasks',payload);
        tasks.value.unshift(res.data);

    }

    return { tasks, createTask };
})  ;