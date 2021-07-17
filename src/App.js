import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Posts from './Components/Posts';
import Pagination from '@material-ui/lab/Pagination';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false)
    }
    fetchPosts();
  },[])
  
  //Get current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  //paginate
  const pageCount = Math.ceil(posts.length / postsPerPage);
  const onChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h3>Random List</h3>
      <Posts loading={loading} posts={currentPosts} />
      <Pagination
            count={pageCount}
            onChange ={onChange}
            variant='outlined'
            shape='rounded'
        />
    </div>
  )
}

export default App;
