import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import PropTypes from 'prop-types'

const Item = ({ image, title, content }) =>{
    return (
        <Card className='item'>
            <CardMedia image={image} className='item-image'/>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {title}
                    </Typography>
                    <Typography 
                        variant='body2' 
                        color='textSecondary' 
                        component='p' 
                        className='body2'>
                            {content}
                    </Typography>
                </CardContent>
        </Card>
    )

    Item.propTypes = {
        image:PropTypes.string,
        title:PropTypes.string.isRequired,
        content:PropTypes.string.isRequired
    }
    
    Item.defaultTypes = {
        image:'No hay imagen disponible'
    }
}

export default Item