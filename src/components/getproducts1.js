import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Category() {
    const [categories, setCategories] = useState([]); 
    const [items, setItems] = useState([]);           
    const [selectedCategory, setSelectedCategory] = useState(null);
     

    useEffect(() => {
        const getCategories = async () => {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const data = await response.json();
                setCategories(data);
        };
        getCategories(); 
    }, []); 

  
    useEffect(() => {
        if (selectedCategory) {
            const getItems = async () => {
                    const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
                    const finalData = await response.json();
                    setItems(finalData);
                } 
                getItems();
            };
        }
    , [selectedCategory]); 

  
    const handleButtonClick = (categoryName) => {
        setSelectedCategory(categoryName);  
    };


    return (
        <div>
            <div>
                {categories.map((category, index) => (
                    <button 
                        style={{ marginLeft: '200px', marginTop: '25px', textTransform: 'uppercase' }}
                        key={index} 
                        className="btn btn-secondary" 
                        onClick={() => handleButtonClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="container text-center" style={{ marginTop: '50px' }}>
                {items.map((item) => (
                    <div className="d-inline-flex p-2">
                        <Link to={`/product/${item.id}`} style={{textDecoration:'none'}}>
                        <div className="card"        style={{ alignItems: 'center', width: '250px', height: '500px', overflow: 'hidden' }}>
                            <img className="card-img-top" src={item.image} alt={item.title}       style={{ marginTop: '20px', width: '150px', height: '150px' }} />
                            <div className="card-body">
                                <h6 className="card-title">{item.title}</h6>
                                <p style={{fontSize: '15px' }}>Price: {item.price}$ <br /> Rated {item.rating.rate}</p>
                                <a href="#" className="btn btn-primary">

                                    <svg style={{ marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                    </svg>
                                    
                                    Add to cart
                                </a>
                                <p className="card-text" style={{ fontSize: '10px' }}>{item.description}</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    
                ))}
            </div>
        </div>
    );
}

export default Category;