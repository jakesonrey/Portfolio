<script setup>
    import MainLayout from '../components/MainLayout';
    const pageTitle = 'Todo'

    import database from '../firebase';
    import { ref, computed, onMounted } from 'vue';
    import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';

    const db = database;
    const task = ref('');
    const searchQuery = ref('');
    const todos = ref([]);

    // Function to fetch tasks from Firestore
    const fetchTasks = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        todos.value = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
    };

    // Fetch tasks on component mount
    onMounted(fetchTasks);

    const addTask = async () => {
    try {
        if (task.value.trim() !== '') {
            const newTask = { details: task.value, done: false };
            const docRef = await addDoc(collection(db, 'tasks'), newTask);
            todos.value.push({ ...newTask, id: docRef.id });
            task.value = '';
        }
    } catch (error) {
        console.error('Error adding task:', error);
    }
    };

    const removeTask = async (taskId) => {
    try {
        await deleteDoc(doc(db, 'tasks', taskId));
        todos.value = todos.value.filter((todo) => todo.id !== taskId);
    } catch (error) {
        console.error('Error removing task:', error);
    }
    };

    const markAsDone = async (taskId) => {
    try {
        const todo = todos.value.find((t) => t.id === taskId);
        if (todo) {
            await updateDoc(doc(db, 'tasks', taskId), { done: !todo.done });
            todo.done = !todo.done;
        }
    } catch (error) {
        console.error('Error updating task:', error);
    }
    };

    const clearAllTasks = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        querySnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
        });
        todos.value = [];
    } catch (error) {
        console.error('Error clearing all tasks:', error);
    }
    };

    const filteredTodos = computed(() => {
    return todos.value.filter((todo) =>
        todo.details.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
    });
</script>

<template>
   
   <MainLayout :pageTitle="pageTitle">
     <!-- Todo App inside a card -->
    <div class="main">
        <div class="container">
        <div class="card">
            <div class="title">
            <h1 class="text-gray-700 text-5xl mb-14">Todo App</h1>
            </div>
            <div class="mb-14">
            <input type="text" placeholder="Search task" v-model="searchQuery" />
            </div>
            <div class="actions">
            <form @submit.prevent="addTask" class="flex items-center">
                <input type="text" placeholder="Add Task" v-model="task" required class="flex-1 mr-2" />
                <button class="bg-green-700 text-white" type="submit">Add</button>
            </form>
            </div>
            <div class="tasks">
            <div v-for="todo in filteredTodos" :key="todo.id" class="task-items">
                <p :class="{ 'line-through': todo.done }" class="task-details">{{ todo.details }}</p>
                <div class="task-buttons flex">
                <button @click="markAsDone(todo.id)" class="done-btn flex-1">Done</button>
                <button @click="removeTask(todo.id)" class="remove-btn flex-1">Remove</button>
                </div>
            </div>
            <button @click="clearAllTasks" class="clear-btn bg-purple-500 text-white mt-5">Clear ALL tasks</button>
            </div>
        </div>
        </div>
    </div>
   </MainLayout>
</template>
  
<style scoped>
  .main {
    background-color: magenta;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .container {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  .card {
    border: 1px solid #f44336; /* Change border color */
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    background-color: cyan; /* Change background color */
  }
  
  .title {
    margin-bottom: 20px;
  }
  
  .mb-14 {
    margin-bottom: 14px;
  }
  
  .actions {
    margin-bottom: 20px;
  }
  
  input[type="text"] {
    padding: 8px;
    margin-right: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button.done-btn,
  button.remove-btn {
    flex: 1;
    margin-right: 8px;
  }
  
  button.done-btn {
    background-color: #4e1bdb;
    color: #fff;
  }
  
  button.remove-btn {
    background-color: #f44336;
    color: #fff;
  }
  
  button.clear-btn {
    background-color: #f44336;
    color: #fff;
  }
  
  .tasks {
    text-align: center;
  }
  
  .task-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);    border-radius: 4px;
  }
  
  .line-through {
    text-decoration: line-through;
  }
  </style>
  