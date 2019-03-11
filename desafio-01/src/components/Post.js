import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

import './Post.scss';

const Post = ({ post }) => (
  <Card>
    <div>
      <h1>{post.author}</h1>
      <p>{post.postTime}</p>
    </div>
  </Card>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    postTime: PropTypes.string,
    authorAvatar: PropTypes.string,
  }).isRequired,
};

export default Post;
