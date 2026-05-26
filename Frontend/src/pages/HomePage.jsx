import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {



    //get data from backend WORKS!!!
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("http://localhost:3000/api/products/");
            console.log(response.data);
            setProducts(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

//show data from backend
    return (
        <div>
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {products.length > 0 ? (
                            <>
                                {products.map((product, index) => (
                                    <div key={index}>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                    </div>
                                ))}
                            </>
                        ) : null}
                    </>
                )}
            </div>
        </div>
    );
}
export default HomePage