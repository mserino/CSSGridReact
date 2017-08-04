import React, { Component } from 'react';
import authorUrl from '../../../images/maggieticon.png';

class PostAuthor extends Component {
  render() {
    return (
      <div className="post-author container-col-2 container-sm-col-4 grid grid-col-12">
        <div className="span-col-12 span-sm-col-1">
          <img src={authorUrl} className="post-author__img" alt="Author"/>
        </div>
        <div className="post-author__info span-col-12 span-sm-col-11">
          <h4 className="post-author__title">Maggie Serino <small>Follow</small></h4>
          <p className="post-author__text">Frontend Developer</p>
          <p className="post-author__text">Feb 9 . 4 min read</p>
        </div>
      </div>
    );
  }
}

export default PostAuthor;
