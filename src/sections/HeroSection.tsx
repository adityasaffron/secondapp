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
      const collectionsData = await fetchCollections();
      setCollections(collectionsData);
    };

    fetchCollectionsData();
  }, []);

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-200">
      <h2 className="text-2xl font-bold">Collections</h2>
      <ul className="flex space-x-4">
        {collections.map((collection) => (
          <li key={collection.node.id }>
            <Link href={`/collections/${collection.node.handle}` }   className="text-gray-800 hover:text-gray-600">
             
                {collection.node.title}
           
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
