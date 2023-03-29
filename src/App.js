import { useEffect } from 'react';
import axios from 'axios'
import './App.css';
//'https://jsonplaceholder.typicode.com/posts'
function App() {

  useEffect(() => {
    
    const getAllPosts = () => {
      // Sincronico
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err))
    }

    const getPost = async (id) => {

      try {
          const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          console.log(res)
      } catch (error) {
        console.log(error)
      }
    }

    getAllPosts()
    getPost(1)


  }, [])
  


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
