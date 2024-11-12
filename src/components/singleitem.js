import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [id]); 

  return (
        <div style={{padding:'200px 600px 300px 25% ',background:'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)'}}>

            <div className="card mb-3" style={{width: '800px',background: 'linear-gradient(180.3deg, rgb(221, 221, 221) 5.5%, rgb(110, 136, 161) 90.2%)'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product.image} className="img-fluid rounded-start" style={{maxWidth: '80%',maxHeight:'80%',marginBottom:'50px',marginTop:'80px',marginLeft:'25px'}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" style={{fontWeight: 'bold',fontSize:'25px'}}>{product.title}</h5>
                            <p className="card-text" style={{fontWeight: 'bold',fontSize:'15px'}}>Price : {product.price} $ </p>
                            <p className="card-text"><small className="text-body-secondary"></small></p>
                            <p className="card-text"><small className="text-body-secondary">{product.description}</small></p>
                            <a href="#" className="btn btn-primary">
                                    <svg style={{ marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                    </svg>
                                    BUY NOW
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    
  )
  
}

export default ProductDetail;
