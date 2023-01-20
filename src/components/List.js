import React from 'react'
import ListItem from './ListItem'

const List = ({posts, onDelete}) => {
  return (
    <ul className='list'>
        {posts.map(({id, title, body})=>(
            <ListItem 
                id={id}
                key={id}
                title={title}
                body={body}
                onDelete={onDelete}
            />
        ))}
    </ul>
  )
}

export default List