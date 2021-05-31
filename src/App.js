import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./components/Post";
import Pagination from "./components/Pagination";

import './App.css';


const App =() => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get("http://www.mocky.io/v2/59b3f0b0100000e30b236b7e");
      setPost(res.data.posts);
      setLoading(false);
    }
    fetchPost();
  }, []);
  // const posts = post.posts;
  // // console.log(posts);
  // // console.log(post.page);
  // console.log(post);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

  const paginate =(pageNumber) => setCurrentPage(pageNumber);

  return(
    <>
      <h1 className="heading">Posts Feed</h1>
      <Post post={currentPost} loading={loading} />
      <Pagination postPerPage={postPerPage} totalPost={post.length} paginate={paginate} />
    </>
  )
}

export default App;
