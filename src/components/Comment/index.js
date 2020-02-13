import React from 'react';

import './style.css';

export default function Comment({ comment }) {
  return (
    <>
      <div className="divider"></div>
      <div className="comments">
        <img
          src={
            comment.author.avatar ||
            'https://image.shutterstock.com/image-vector/social-media-avatar-user-icon-260nw-1061793911.jpg'
          }
          alt={comment.author.name}
        />
        <p>
          <span>{comment.author.name}</span>
          {comment.content}
        </p>
      </div>
    </>
  );
}
