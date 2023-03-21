//import { useEffect, useState } from 'react';

//import { getPosts } from '../api';
import { Home,Login, Settings } from '../pages';
import  Loader  from '../components/Loader';
import Navbar from './Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Page404 from './Page404';
import { useAuth } from '../hooks';
import Signup from '../pages/Singup';

const About=()=>{
  return <h1>About</h1>
}

const UserInfo=()=>{
  return <h1>User</h1>
}

function App() {
  const auth=useAuth();

  /*useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);*/

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
        <Home />
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
        <Route exact path='/register'>
        <Signup />
        </Route>
        <Route exact path='/setting'>
        <Settings />
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
