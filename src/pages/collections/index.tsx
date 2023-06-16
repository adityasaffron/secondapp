import { useEffect, useState } from 'react';
import { storefront } from '@site/utilities/storefront';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';

export default function CollectionPage() {
    const router = useRouter();
    const { handle } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
       
        let qq = `query {
            collectionByHandle(handle: ${JSON.stringify(handle)}) {
              products(first: 10) {
                edges {
                  node {
                    id
                    title
                  }
                }
              }
            }
          }
        `
    
        
        
        
        const  data  = await storefront.query(qq);
      
        
      const { collectionByHandle } = data;

    

      setProducts(collectionByHandle.products.edges);
    };

    fetchProducts();
  }, []);

  return (
    <section>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.node.id}>
            <div>{product.node.title}</div>
            
          </li>
        ))}
      </ul>
    </section>
  );
}
