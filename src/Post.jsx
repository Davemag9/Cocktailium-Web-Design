import React from 'react'

export const Post = (props) => {
  return (
    <div className="post">
        <img className="post-img" src={props.link}></img>
        <p className="post-aut">{props.nick}</p>
      </div>
  )
}
