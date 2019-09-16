import React, {useContext} from 'react';
//
import {View, Text, FlatList, StyleSheet, Button, TouchableWithoutFeedback} from 'react-native';
//
import BlogContext from '../../src/context';

//

const styled = StyleSheet.create({
  container: {
    flex: 1,
  },
  blogList: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'blue',
  },
});
const Main = ({navigation}: any) => {

  const {data, addBlog} = useContext(BlogContext);

  const BlogList = (item: any, index: number) => {
    return (

      <TouchableWithoutFeedback onLongPress={ ()=>addBlog("REMOVE_BLOG", item)}>
        <View style={styled.blogList}>
        <Text>{item.title}</Text>
        <Text>O</Text>
      </View>
      </TouchableWithoutFeedback>
      
    );
  };

  return (
    <View style={styled.container}>
      <Text onPress={() => navigation.navigate('Edit')}>Available Blogs</Text>
      <FlatList
        data={data}
        keyExtractor={(blog: any) => blog.title}
        renderItem={(item: any) => BlogList(item.item, item.index)}
      />
      <Button title="add post" onPress={()=>addBlog("ADD-BLOG")} />
   
    </View>
  );
};

export default Main;
