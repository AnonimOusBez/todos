import { create } from 'zustand';

const tasksList = [
  { name: "Complete online javascript course", comp: true },
  { name: "read for 1 hour", comp: false },
  { name: "10 minutes meditation", comp: true },
  { name: "buy food", comp: false },
];

export const useTodos = create((set,get) => ({
  todos: tasksList,
  setTodos: (todo) => set((state) => ({ todos:  [...state.todos, todo] })),
  deleteAllTodos: () =>
    set(() => ({
      todos: [],
    })),
  filter: 'All',
  setFilter: (filter) => set(() => ({ filter })),
  newTask:{name: "",comp: false,},
  setNewTask: (newTask) => set((state) => ({ newTask })),
  dark:false,
  setDark: (dark) => set((state) => ({ dark })),

  filteredTodos: () => {
    const { todos, filter } = get();
    switch (filter) {
      case 'Active':
        return todos.filter((todo) => !todo.comp);
      case 'Completed':
        return todos.filter((todo) => todo.comp);
      default:
        return todos;
    }
  },
}));
