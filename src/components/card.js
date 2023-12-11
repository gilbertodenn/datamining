import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import "./cart";
import Background from "../pictures/bg.jpeg";
import NavScrollExample from "./nav";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function Madrid() {
  const [products, setProducts] = useState([]);
  const [ascProducts, setAscproducts] = useState([])
  const [descProducts, setDescProducts] = useState([])
  const [filterSort, setFilterSort] = useState(false);

  const images = [Background, Background, Background, Background, Background];

  const dataset = [
    {
      CRIM: 0.00632,
      ZN: 18.0,
      INDUS: 2.31,
      CHAS: 0.0,
      NOX: 0.538,
      RM: 6.575,
      AGE: 65.2,
      DIS: 4.09,
      RAD: 1.0,
      TAX: 296.0,
      PTRATIO: 15.3,
      B: 396.9,
      LSTAT: 4.98,
      PRICE: 24.0,
    },
    {
      CRIM: 0.02731,
      ZN: 0.0,
      INDUS: 7.07,
      CHAS: 0.0,
      NOX: 0.469,
      RM: 6.421,
      AGE: 78.9,
      DIS: 4.9671,
      RAD: 2.0,
      TAX: 242.0,
      PTRATIO: 17.8,
      B: 396.9,
      LSTAT: 9.14,
      PRICE: 21.6,
    },
    {
      CRIM: 0.02729,
      ZN: 0.0,
      INDUS: 7.07,
      CHAS: 0.0,
      NOX: 0.469,
      RM: 7.185,
      AGE: 61.1,
      DIS: 4.9671,
      RAD: 2.0,
      TAX: 242.0,
      PTRATIO: 17.8,
      B: 392.83,
      LSTAT: 4.03,
      PRICE: 34.7,
    },
    {
      CRIM: 0.03237,
      ZN: 0.0,
      INDUS: 2.18,
      CHAS: 0.0,
      NOX: 0.458,
      RM: 6.998,
      AGE: 45.8,
      DIS: 6.0622,
      RAD: 3.0,
      TAX: 222.0,
      PTRATIO: 18.7,
      B: 394.63,
      LSTAT: 2.94,
      PRICE: 33.4,
    },
    {
      CRIM: 0.03237,
      ZN: 0.0,
      INDUS: 2.18,
      CHAS: 0.0,
      NOX: 0.458,
      RM: 6.998,
      AGE: 45.8,
      DIS: 6.0622,
      RAD: 3.0,
      TAX: 222.0,
      PTRATIO: 18.7,
      B: 394.63,
      LSTAT: 2.94,
      PRICE: 33.4,
    },
    {
      CRIM: 0.03237,
      ZN: 0.0,
      INDUS: 2.18,
      CHAS: 0.0,
      NOX: 0.458,
      RM: 6.998,
      AGE: 45.8,
      DIS: 6.0622,
      RAD: 3.0,
      TAX: 222.0,
      PTRATIO: 18.7,
      B: 394.63,
      LSTAT: 2.94,
      PRICE: 33.4,
    },
  ];

  useEffect(() => {
    setProducts(dataset);
  }, []);

  const handleSortAsc = () => {

  }

  const handleSortDesc = () => {

  }

  return (
    <div style={{ width: '100vw', height: "100vh" }}>
      <NavScrollExample />
      <div>
        {filterSort ? (
          <div onClick={() => { setFilterSort(!filterSort) }} style={{ margin: "16px", display: "flex", alignItems: "center", flexWrap: "wrap", cursor: "pointer" }}>
            <Typography>Sort Price</Typography>
            <ArrowDropUpIcon />
          </div>
        ) : (
          <div onClick={() => { setFilterSort(!filterSort) }} style={{ margin: "16px", display: "flex", alignItems: "center", flexWrap: "wrap", cursor: "pointer" }}>
            <Typography>Sort Price</Typography>
            <ArrowDropDownIcon />
          </div>
        )}
        {
          !filterSort ? (
            <div style={{ display: "flex", justifyContent: "space-between", margin: "16px", flexWrap: "wrap" }}>
              {products.sort((a, b) => a.PRICE - b.PRICE).map((item, index) => {
                return (
                  <div style={{ height: 250 }}>
                    <Card sx={{ width: 250 }}>
                      <CardMedia sx={{ height: 140 }} image={images[index]} />
                      <CardContent>
                        <Typography>Price: ${item.PRICE * 10000}</Typography>
                        <Typography>Room: {Math.round(item.RM)}</Typography>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          ) : (<div style={{ display: "flex", justifyContent: "space-between", margin: "16px", flexWrap: "wrap" }}>
          {products.sort((a, b) => b.PRICE - a.PRICE).map((item, index) => {
            return (
              <div style={{ height: 250 }}>
                <Card sx={{ width: 250 }}>
                  <CardMedia sx={{ height: 140 }} image={images[index]} />
                  <CardContent>
                    <Typography>Price: ${item.PRICE * 10000}</Typography>
                    <Typography>Room: {Math.round(item.RM)}</Typography>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>)
        }
      </div>
    </div>
  );
}

export default Madrid;
