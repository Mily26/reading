import React from 'react';
import './index.css'
import Item from '../Item'

function List(props) {
    return (
        <div className="List">
            {
                props.items.map(item =>
                <Item title={item.title} key={item.id} id={item.id} image={item.image} rating={item.rating} onUpdateRating={props.onUpdateRating} onRemove={props.onRemove} />
                )
            }
        </div>
    );
}

export default List;