import { createSlice } from '@reduxjs/toolkit';

const initialTasks = [
  { id: 1, title: 'My Task 1', description: 'Make a Morning yoga' },
  { id: 2, title: 'My Task 2', description: 'Take a shower' },
  { id: 3, title: 'My Task 3', description: 'Walk with the dog' },
  { id: 4, title: 'My Task 4', description: 'Get ready for work' },
  { id: 5, title: 'My Task 5', description: 'Take the child to kindergarten' },
  { id: 6, title: 'My Task 6', description: 'Go to the store' },
  { id: 7, title: 'My Task 7', description: 'Clean the house' },
  { id: 8, title: 'My Task 8', description: 'Go to the post office' },
  { id: 9, title: 'My Task 9', description: 'Go to the gym' },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: initialTasks,
  },
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    updateTask(state, action) {
      const { id, updatedTask } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id);
      if (existingTask) {
        Object.assign(existingTask, updatedTask);
      }
    },
    deleteTask(state, action) {
      const { id } = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== id);
    }
  }
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
