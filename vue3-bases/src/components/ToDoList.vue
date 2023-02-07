<template>
    <h1>{{ title }}</h1>

    <label for="toDo">Add a Task 💬</label>
    <div class="task">
        <input type="text" id="toDo" v-model="toDo" @keypress.enter="addToDo" placeholder="Enter a Task"> 
        <button @click="addToDo">Add</button>
    </div>


    <ol id="tasks">
        <b>List of Tasks</b>
        <li v-for=" toDo in toDos">
            {{ toDo }} <span @click="deleteToDo(index)">❌</span>
        </li>
    </ol>
</template>

<script>
import useToDoList from '@/Composanble/useToDoList';
export default {
    name: 'ToDoList',
    props: {
        title: {
            type: String,
            default: 'Title'
        }
    },
    setup() {
        const { toDo, toDos, addToDo, deleteToDo } = useToDoList();
        return { toDo, toDos, addToDo, deleteToDo };
    }
}
</script>

<style>
.task {
    width: 50%;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.task input {
    width: 50%;
    height: 2rem;
    border-radius: 1rem;
    border: none;
    background-color: rgb(178, 234, 234);
    padding: 0rem 2rem;
}
.task button{
    padding: 0rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: rgb(201, 255, 171);
}

#tasks {
    width: 50%;
    padding: 1rem 3rem;
    margin: auto;
    height: fit-content;
    border-radius: 0.5rem;
    background-color: rgb(213, 255, 234);
}

#tasks li {
    text-align: left;
    width: 50%;
    padding: 0% 0.5rem;
    height: fit-content;
    list-style: decimal;
    border-bottom: rgb(182, 182, 182) solid 1px;
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
}
#tasks li span {
    text-align: right;
    height: fit-content;
    cursor: pointer;
}
#tasks li span:hover {
    transform: scale(2);
}
</style>