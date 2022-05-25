<template>
  <div id="app">
    <h1>Lista de Tarefas</h1>
    <TasksProgress :progress="progress" />
    <NewTask @taskAdded="addTask" />
    <TaskGrid
      :tasks="tasks"
      @taskDeleted="deleteTask"
      @taskStateChanged="toggleTaskState"
    />
    <p>&copy;<i> Copyright Dimas Capelari - 2022</i></p>
  </div>
</template>

<script>
import TasksProgress from "./components/TasksProgress.vue";
import NewTask from "./components/NewTask.vue";
import TaskGrid from "./components/TaskGrid.vue";

export default {
  components: { TaskGrid, NewTask, TasksProgress },
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },
  },
  methods: {
    addTask(task) {
      const sameName = (t) => t.name === task.name;
      const reallyNew = this.tasks.filter(sameName).length == 0;

      if (task.name == "") {
        //alert("Preencha com uma nova tarefa!");
        //this.tasks.splice(i, 1);
        //deleteTask();
      } else if (reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
        });
      }
    },
    deleteTask(i) {
      this.tasks.splice(i, 1);
    },
    toggleTaskState(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
    },
  },
  created() {
    const json = localStorage.getItem("tasks");
    //const array = JSON.parse(json);
    //this.tasks = Array.isArray(array) ? array : [];
    this.tasks = JSON.parse(json) || [];
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(90deg, rgb(0, 0, 0) 20%, rgb(19, 10, 146) 100%);
  /* background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));*/
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  padding-bottom: 15px;
  font-weight: 300;
  font-size: 3rem;
}

@media (max-width: 800px) {
  #app {
    height: 100%;
  }

  #app h1 {
    font-size: 2.5rem;
    margin-top: 50px;
    padding-bottom: 10px;
  }
}
</style>
