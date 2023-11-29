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

function Madrid() {
  const [products, setProducts] = useState([]);

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
  ];

  useEffect(() => {
    setProducts(dataset);
  }, []);

  return (
    <>
      <NavScrollExample />
      <div
        style={{
          margin: "50px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.map((item, index) => {
          return (
            <div key={index}>
              <div className="budi">
                <Card sx={{ width: 300, margin: "12px" }}>
                  <div className="judul">
                    <CardMedia sx={{ height: 300 }} image={images[index]} />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      ZN: {item.ZN}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.INDUS}
                    </Typography>
                    <p>{item.CHAS}</p>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Madrid;
