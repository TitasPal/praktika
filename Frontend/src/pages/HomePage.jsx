import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/porduct.jsx';
import Loading from '../components/loading.jsx';

const HomePage = ({ query }) => {



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

    const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
);

//show data from backend
    return (
        <div>

            <div className='min-w-screen bg-gray-50 min-h-screen'>
                {isLoading ? (
                    <div className="flex items-center justify-center min-h-[60vh]">
                        <Loading />
                    </div>
                ) : (
                    <>
                        {filteredProducts.length > 0 ? (
                            <>
                            
                            {
                                filteredProducts.map((product, index) => {
                                    return (
                                       <Product key={product._id} product={product} />
                                    )
                                })
                            }
                            </>
                        ) : <p className="text-center text-gray-500 mt-10">No result found.</p>}
                    </>
                )}
            </div>
        </div>
    );
}
export default HomePage