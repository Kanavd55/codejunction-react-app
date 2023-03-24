//import { useEffect, useState } from 'react';

//import { getPosts } from '../api';
import { Home,Login, Settings } from '../pages';
import  Loader  from '../components/Loader';
import Navbar from './Navbar';
import { BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';
import Page404 from './Page404';
import { useAuth } from '../hooks';
import Signup from '../pages/Singup';

function PrivateRoute({children,...rest}){
  const auth=useAuth();
  return (
  <Route 
  {...rest}
  render={()=>{
    if(auth.user){
      return children
    }
    return <Redirect to="/login" />
  }}
  />
  )
}

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
        <PrivateRoute exact path='/setting'>
        <Settings />
        </PrivateRoute>
        <Route>
          <Page404 />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
