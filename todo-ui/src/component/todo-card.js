//create functional component with name of  card and pass props MUI todo list
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Cards = ({ todo }) => {
    return (
        <Card style={{ margin: '10px', width: '300px'}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {todo.title}
                </Typography>
                <Typography variant="body2">
                    {todo.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Cards;

