import { storefront } from '@site/utilities/storefront';
import { useState, useEffect } from 'react';
import Link from 'next/link';
export async function fetchCollections() {
  const { collections } = await storefront.query({
    collections: [
      {
        first: 12, // Adjust the number as needed
      },
      {
        edges: {
          node: {
            id: true,
            title: true,
            handle: true
          },
        },
      },
    ],
  });

  let ccs = collections.edges
  console.log(ccs, 'collectionscollectionscollectionscollectionscollections');
  return ccs;
}

export function HeroSection() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollectionsData = async () => {
      const collectionsData:any = await fetchCollections();
      setCollections(collectionsData);
    };

    fetchCollectionsData();
  }, []);

  return (
    <section>
      <h2>Collections</h2>
      <ul>
        {collections.map((collection:any) => (
          <li key={collection.node.id} style={{ cursor: 'pointer' }}>
            <Link href={`/collections/${collection.node.handle}`}>
              <div>{collection.node.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
