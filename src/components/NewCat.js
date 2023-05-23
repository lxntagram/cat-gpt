import React from 'react'

export const NewCat = ({onNewChat}) => {
  return (
    <div className="new-cat" onClick={onNewChat}>
        <div className="new-cat-plus">+</div>
        <div className="new-cat-text">새 냐냥!!</div>
    </div>
  )
}
