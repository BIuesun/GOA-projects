import { createContext, useContext, useReducer, useEffect } from 'react';

const TodoContext = createContext();

const initialState = {
  todos: [],
  filter: 'all',        
  loading: false,
  error: null,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };

    case 'SET_ERROR':
      return { ...state, error: action.payload };

    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
        error: null,
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };

    case 'CLEAR_ALL':
      return { ...state, todos: [] };

    case 'SET_FILTER':
      return { ...state, filter: action.payload };

    case 'LOAD_TODOS':
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      dispatch({ type: 'LOAD_TODOS', payload: JSON.parse(savedTodos) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => useContext(TodoContext);