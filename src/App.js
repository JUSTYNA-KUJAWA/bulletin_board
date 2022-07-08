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
import PostMy from './components/views/PostMy/PostMy';
import PostEdit from './components/views/PostEdit/PostEdit';
import PostAdd from './components/views/PostAdd/PostAdd';
import MyPosts from './components/views/MyPosts/MyPosts';
import BackPostMy from './components/views/BackPostMy/BackPostMy';
import NotFound from './components/views/NotFound/NotFound';
import AllPosts from './components/views/AllPosts/AllPosts';
import AllMyPosts from './components/views/AllMyPosts/AllMyPosts';
import PostsHomePage from './components/views/PostsHomePage/PostsHomePage';
import PostTitleLogged from './components/features/PostTitleLogged/PostTitleLogged';
import TheNewest from './components/features/TheNewest/TheNewest';

const theme = createTheme({
  palette: {
    primary: { main: '#D2DAE1' },
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
              <Route exact path='/allmyposts' element={<AllMyPosts/>} />
              <Route exact path='/posts' element={<PostsHomePage/>} />
              <Route exact path='/homepagelogged' element={<PostTitleLogged/>} />
              <Route exact path='/myposts' element={<MyPosts/>} />
              <Route exact path='/post/add' element={<PostAdd/>} />
              <Route exact path='/post/add/guest' element={<NotFound/>}  />
              <Route exact path='/post/:id' element={<Post/>} />
              <Route exact path='/post1/:id' element={<PostMy/>} />
              <Route exact path='/post2/:id' element={<BackPostMy/>} />
              <Route exact path='/post3/:id' element={<TheNewest/>} />
              <Route exact path='/post2/:id/edit' element={<PostEdit/>} />
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
