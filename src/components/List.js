import React from 'react'
import Item from './Item'

const List = ({results}) => {
    return (
        <div className='grid'>
            {results &&
                results.map((e) => (
                    <Item
                        image={e.strDrinkThumb}
                        title={e.strDrink}
                        content={e.strInstructions} 
                    />
            ))}
        </div>
    )
}

export default List