import React, {createContext, useState, useEffect} from 'react';

export interface ContextProps {
  data: {title: string}[];
  addBlog: () => any;
}

export interface IBlogType {
  data: {title: string}[];
}

const initialValue: IBlogType = {
  data: [
    {title: `blog post #1`},
    {title: `blog post #2`},
    {title: `blog post #3`},
    {title: `blog post #4`},
    {title: `blog post #5`},
    {title: `blog post #6`},
    {title: `blog post #7`},
    {title: `blog post #8`},
  ],
};

const BlogContext = createContext({} as ContextProps);

export const BlogProvider = ({children}: any) => {
  const [blogPost, setBlogPost] = useState();

  useEffect(() => {
    setBlogPost(initialValue.data);
  }, []);

  const addBlogPost = () => {
    setBlogPost([...blogPost, {title: `blog post #${blogPost.length + 1}`}]);
  };

  return (
    <BlogContext.Provider value={{data: blogPost, addBlog: addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContext;
