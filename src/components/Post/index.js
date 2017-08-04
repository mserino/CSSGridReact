import React, { Component } from 'react';
import './style.css';

import PostBody from './PostBody';
import PostHeader from './PostHeader';
import PostAuthor from './PostAuthor';

class Post extends Component {
  render() {
    return (
      <div className="span-col-12 grid grid-col-12">
        <PostAuthor />
        <PostHeader />
        <PostBody />
      </div>
    );
  }
}

export default Post;
