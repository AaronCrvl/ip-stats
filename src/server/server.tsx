import React from 'react';

export default function Server(){
    const express = require('express')
    const app = express()
    app.listen(3000, ()=> console.log('Server listening on port 3000'))
}