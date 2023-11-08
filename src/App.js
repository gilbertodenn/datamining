import logo from './logo.svg';
import './App.css';
import React, { useNavigate, useEffect, useState, createContext } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Header.js


const Header = () => {
  return (
    <header>
      <nav>
        <div>
          {/* olx*/}
          <h1>JUBELEG</h1>
        </div>
      </nav>
    </header>
  );
};




function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?select=title,price,description,images').then(res => {
      setProducts(res.data.products)
    })
  }, []);
  
  
  return (
    <div style={{ margin:"50px" }}>
      {products.map((item,index) => {
          return (
            <div key={index}>
              <div className='row col md-8'>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={item.images[0]} alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.description}
        </Typography>
        <p>{item.price}</p>
      </CardContent>
      <CardActions>
        <Button size="small"> Add To Cart </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </div>
    
    )})}
    </div>
  );
}

export default (App);