import React, { Component } from 'react';
import './Post.css';

import PostBody from './PostBody/PostBody';
import PostHeader from './PostHeader/PostHeader';
import PostAuthor from './PostAuthor/PostAuthor';

class Post extends Component {
  render() {
    return (
      <div className="post grid grid-col-12 span-col-12">
        <PostAuthor />
        <PostHeader />
        <PostBody />
      </div>
    );
  }
}

export default Post;
