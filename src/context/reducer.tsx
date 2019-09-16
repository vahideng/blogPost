const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD-BLOG':
      return [...state, {title: `blog post #${state.length + 1}`}];

      case 'REMOVE-BLOG': return state.filter((item: any) => item !== action.payLoad)
    default:
      return state;
  }
};

export default reducer;
