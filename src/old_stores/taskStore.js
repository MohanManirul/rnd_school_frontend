import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../services/axiosClient";
import cogoToast from "cogo-toast";
import Swal from "sweetalert2";

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
        const index = tasks.value.findIndex((t)=>t.id===id) ;
        if(index !==-1) tasks.value[index] = res.data ;
        
   }

   //delete task

   const deleteTask = async(id) =>{
        const res = apiClient.delete(`/tasks/${id}`) ;
        tasks.value = tasks.value.filter((t)=>t.id !==id) ;
   }

   //fetch trashed task

   const fetchTrashedTask = async() =>{
    loading.value = true ;
    try{
        const res = await apiClient.get("/tasks/trashed");
        
        tasks.value = res.data.data.data?? res.data.data ?? [] ;       
    }catch(error){
        console.log('Failed to fetched trashed tasks', error);
        cogoToast.error('Failed to load trashed tasks') ;
    }finally{
        loading.value = false ;
    }
   }
   //parmanent delete 

   const forceDeleteTask = async (id) => {
            const confirm = await Swal.fire({
              title: "Are you sure?",
              text: "You won’t be able to recover this task!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#e3342f",
              cancelButtonColor: "#6c757d",
              confirmButtonText: "Yes, delete it!"
            });

            if (confirm.isConfirmed) {
              try {
                await apiClient.delete(`/tasks/${id}/force`);
                tasks.value = tasks.value.filter((t) => t.id !== id);
                Swal.fire(
                  "Deleted!",
                  "The task has been permanently deleted.",
                  "success"
                );
              } catch (error) {
                console.error("Failed to permanently delete task", error);
                Swal.fire("Failed", "Could not delete the task.", "error");
              }
            }
   };

   const RestoreTask = async (id) => {
    const confirm = await Swal.fire({
      title: "Restore Task?",
      text: "Do you want to restore this task?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#38c172",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, restore it!"
    });

    if (confirm.isConfirmed) {
      try {
        await apiClient.post(`/tasks/${id}/restore`);
        tasks.value = tasks.value.filter((t) => t.id !== id);
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Task restored successfully",
          showConfirmButton: false,
          timer: 3000
        });
      } catch (error) {
        console.error("Failed to restore task", error);
        Swal.fire("Failed", "Could not restore the task.", "error");
      }
    }
   };

    return {
      tasks,
      createTask,
      loading,
      fetchTaskByStatus,
      getTaskById,
      updateTask,
      deleteTask,
      fetchTrashedTask,
      forceDeleteTask,
      RestoreTask
    };
})  ;