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
       
        const qq:any = `query {
            collectionByHandle(handle: "${handle}") {
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
      
        
      const  collectionByHandle:any  = data.collectionByHandle;

    

      setProducts(collectionByHandle.products.edges);
    };

    fetchProducts();
  });

  return (
    <section>
      <h2>Products</h2>
      <ul>
        {products.map((product:any) => (
          <li key={product.node.id}>
            <div>{product.node.title}</div>
            
          </li>
        ))}
      </ul>
    </section>
  );
}
