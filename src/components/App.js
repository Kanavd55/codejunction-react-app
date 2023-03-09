import { useEffect, useState } from 'react';

import { getPosts } from '../api';
import { Home,Login } from '../pages';
import  Loader  from '../components/Loader';
import Navbar from './Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Page404 from './Page404';

const About=()=>{
  return <h1>About</h1>
}

const UserInfo=()=>{
  return <h1>User</h1>
}

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
        <Home posts={posts} />
        </Route>
        <Route exact path='/about'>
        <About />
        </Route>
        <Route exact path='/user'>
        <UserInfo />
        </Route>
        <Route exact path='/login'>
        <Login />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
