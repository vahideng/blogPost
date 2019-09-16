import React, {createContext, useReducer, useEffect} from 'react';

import blogReducer from './reducer';
export interface ContextProps {
  data: {title: string}[];
  addBlog: (type: string, payLoad?: any) => any;
}

interface IBlogType {
  [index: number]: {title: string};
}

const initialValue: IBlogType = [
  {title: `blog post #1`},
  {title: `blog post #2`},
  {title: `blog post #3`},
  {title: `blog post #4`},
  {title: `blog post #5`},
  {title: `blog post #6`},
  {title: `blog post #7`},
  {title: `blog post #8`},
];

const BlogContext = createContext({} as ContextProps);

export const BlogProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(blogReducer, initialValue);

  const addBlogPost = (type: string, payLoad?: any) => {
    switch (type) {
      case 'ADD-BLOG':
        dispatch({type: 'ADD-BLOG'});
        break;
      case 'REMOVE_BLOG':
        dispatch({type: 'REMOVE-BLOG', payLoad});
    }
  };

  return (
    <BlogContext.Provider value={{data: state, addBlog: addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContext;
