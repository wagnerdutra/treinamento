import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: 'Wagner',
        postTime: '10',
        authorAvatar: '',
      },
      {
        id: 2,
        author: 'Wagner',
        postTime: '10',
        authorAvatar: '',
      },
      {
        id: 3,
        author: 'Wagner',
        postTime: '10',
        authorAvatar: '',
      },
      {
        id: 4,
        author: 'Wagner',
        postTime: '10',
        authorAvatar: '',
      },
      {
        id: 5,
        author: 'Wagner',
        postTime: '10',
        authorAvatar: '',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <section>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </section>
      </Fragment>
    );
  }
}

export default App;
