import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

const ProductList = (props) => {
    const [prod, setProd] = useState(props.prod)
    return (
        <div>
            <p > The Title : {prod.title}, The Price : {prod.price},the Description : {prod.description}</p>
        </div>
    )
}

export default ProductList;

