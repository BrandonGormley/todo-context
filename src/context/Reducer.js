export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        isMessage: true,
        message: 'Task Added!',
        messageStyles: 'Added',
        tasks: [...state.tasks, action.payload],
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        isMessage: true,
        message: 'Task Deleted!',
        messageStyles: 'Deleted',
        tasks: state.tasks.filter(task => {
          return task.id !== action.payload;
        }),
      };
    case 'FORM_ERROR':
      return {
        ...state,
        isMessage: true,
        message: 'Fill out form fields',
        messageStyles: 'Deleted',
      };
    default:
      return state;
  }
};
