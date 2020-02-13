import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import Comment from '../Comment';

export default function Post({ data }) {
  return (
    <section>
      <div className="header">
        <img
          src={
            data.author.avatar ||
            'https://image.shutterstock.com/image-vector/social-media-avatar-user-icon-260nw-1061793911.jpg'
          }
          alt={data.author.name}
        />
        <div className="user-info">
          <span>{data.author.name}</span>
          <small>{data.date}</small>
        </div>
      </div>
      <p>
        {data.content}
      </p>

      {data.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </section>
  );
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
};
