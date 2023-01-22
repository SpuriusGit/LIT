import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import List from './components/List';
import SortSelect from './components/SortSelect';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  let [post, setPost] = useState({title:'', body: ''});
  let [search, setSearch] = useState('');
  let [noFilteredPosts, setNoFilteredPosts] = useState(posts);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((result) => {
        dispatch({type: 'GET_POSTS', payload: result});   
        setNoFilteredPosts([...noFilteredPosts, ...result]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const addpost = (event) => {
    let newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
      postID: Date.now()
    }
    event.preventDefault();
    dispatch({type: 'ADD_POST', payload: newPost});
    setNoFilteredPosts([...noFilteredPosts, newPost]);
    setPost({title: '', body: ''});
  };

  const onDelete = (id) => {
    dispatch({type:'DELETE_POST', payload: id});
    setNoFilteredPosts([...noFilteredPosts.filter((post) =>  post.id !== id)]);
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
    let filteredPosts = noFilteredPosts.filter((post) =>  post.title.toLowerCase().includes(event.target.value.toLowerCase()) || post.body.toLowerCase().includes(event.target.value.toLowerCase()));
    dispatch({type:'GET_POSTS', payload: filteredPosts});
  }
  
  return (
    <div className="App">
      <h1>LIT test task</h1>
      <form className='post-form'>
        <input type={'text'} value={post.title} onChange={(event)=> setPost({...post, title: event.target.value})} placeholder="title"/>
        <input type={'text'} value={post.body}  onChange={(event)=> setPost({...post, body: event.target.value})} placeholder="description"/>
        <input type={'text'} value={search}  onChange={handleSearch} placeholder="search..."/>
        <button onClick={addpost}>add post</button>
      </form>
      <SortSelect />
      <List 
        posts={posts} 
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
