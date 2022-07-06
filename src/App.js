import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllPosts } from './redux/postsRedux';
import { createTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Post from './components/views/Post/Post';
import PostEdit from './components/views/PostEdit/PostEdit';
import PostAdd from './components/views/PostAdd/PostAdd';
import NotFound from './components/views/NotFound/NotFound';
import UserLoggedPosts from './components/views/UserLoggedPosts/UserLoggedPosts';
import AllPosts from './components/views/AllPosts/AllPosts';
import MyPosts from './components/views/MyPosts/MyPosts';

const theme = createTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchAllPosts()), [dispatch]);
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Routes>
              <Route exact path='/allposts' element={<AllPosts/>} />
              <Route exact path='/myposts' element={<MyPosts/>} />
              <Route exact path='/post/add' element={<PostAdd/>} />
              <Route exact path='/post/:id' element={<Post/>} />
              <Route exact path='/post/:id/edit' element={<PostEdit/>} />
              <Route exact path='/userloggedposts' element={<UserLoggedPosts/>} />
              <Route path='*' element={<NotFound/>} />
              <Route exact path='/' element={<Homepage/>} />
            </Routes>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
