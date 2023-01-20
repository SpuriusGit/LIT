import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import List from './components/List';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  let [post, setPost] = useState({title:'', body: ''});

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts?_limit=2")
      .then((response) => response.json())
      .then((result) => dispatch({type: 'GET_POSTS', payload: result}))
      .catch((error) => console.log(error));
  };

  const addpost = (event) => {
    event.preventDefault();
    dispatch({type: 'ADD_POST', payload: {
      id: Date.now(),
      title: post.title,
      body: post.body,
      postID: Date.now()
    }});
    setPost({title: '', body: ''});
  };

  const onDelete = (id) => {
    dispatch({type:'DELETE_POST', payload: id});
  }
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <form>
        <input type={'text'} value={post.title} onChange={(event)=> setPost({...post, title: event.target.value})}/>
        <input type={'text'} value={post.body}  onChange={(event)=> setPost({...post, body: event.target.value})}/>
        <button onClick={addpost}>add post</button>
      </form>
      <List 
        posts={posts} 
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
