import React, {useContext} from 'react';
//
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
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
  
  

  
  const BlogList = (item: any,index: number) => {

    console.log(index,"item")
    
    return (
      <View style={styled.blogList}>
        <Text>{item.title}</Text>
        <Text>O</Text>
      </View>
    );
  };

  const {data, addBlog} = useContext(BlogContext);

  return (
    <View style={styled.container}>
      <Text onPress={() => navigation.navigate('Edit')}>Available Blogs</Text>
      <FlatList
        data={data}
        keyExtractor={(blog: any) => blog.title}
        renderItem={(item: any) => BlogList(item,item.index)}
      />
      <Button title="add post" onPress={addBlog} /> 
    </View>
  );
};

export default Main;
