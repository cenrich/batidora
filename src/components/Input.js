import React from 'react'
import { TextField } from '@material-ui/core'

const Input = ({ value, onInputChange, results }) =>{
    return (
        <TextField  
            label='buscá tu cóctel favorito' 
            value={value}
            onChange={(e)=>onInputChange(e)}
            color='secondary'
            variant='outlined'
            margin='dense'
            fullWidth={true}
        />
    )
}

export default Input