import { useEffect, useState } from 'react';
import { storefront } from '@site/utilities/storefront';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import Image from 'next/image';

export default function CollectionPage() {
  const router = useRouter();
  const { handle } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const qq: any = `query {
            collectionByHandle(handle: "${handle}") {
              products(first: 10) {
                edges {
                  node {
                    id
                    title
                    featuredImage {
                      originalSrc
                      altText
                    }
                  }
                }
              }
            }
          }
        `;

      const data = await storefront.query(qq);

      const collectionByHandle: any = data.collectionByHandle;

      setProducts(collectionByHandle.products.edges);
    };

    fetchProducts();
  });

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: any) => (
          <li key={product.node.id} className="p-4 border rounded shadow">
            <div className="font-bold mb-2">{product.node.title}</div>
            <div className="w-full h-40 mb-2 relative">
              <Image
                src={product.node.featuredImage.originalSrc}
                alt={product.node.featuredImage.altText}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            {/* Add more product details here */}
          </li>
        ))}
      </ul>
    </section>
  );
}
