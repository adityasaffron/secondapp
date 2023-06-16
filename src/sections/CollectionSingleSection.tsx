import { storefront } from '@site/utilities/storefront';
import { NextImage, DataProps, NextLink } from '@site/utilities/deps';

export async function fetchCollectionSingleSection(handle: string) {
    const { collectionByHandle } = await storefront.query({
        collectionByHandle: [
            { handle },
            {
                id: true,
                title: true,
                description: true,
                products: [
                    { first: 4 },
                    {
                        nodes: {
                            id: true,
                            title: true,
                            handle: true,
                            image: {
                                url: [{ transform: { maxWidth: 500 } }, true],
                                altText: true,
                                width: true,
                                height: true,
                            },
                            priceRange: {
                                minVariantPrice: {
                                    amount: true,
                                    currencyCode: true,
                                },
                            },
                        },
                    },
                ],
            },
        ],
    });

    return collectionByHandle;
}

export function CollectionSingleSection(props: DataProps<typeof fetchCollectionSingleSection>) {
    const { collectionByHandle } = props.data;

    return (
        <section>
            <h2 className="sr-only">Collection Information</h2>

            <h1 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{collectionByHandle.title}</h1>

            <p className="mb-5 text-base text-gray-900">{collectionByHandle.description}</p>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {collectionByHandle.products.nodes.map((product) => (
                    <NextLink key={product.handle} href={`/products/${product.handle}`} className="group">
                        <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                            <NextImage
                                src={product.image.url}
                                alt={product.image.altText || ''}
                                height={product.image.height}
                                width={product.image.width}
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                    </NextLink>
                ))}
            </div>
        </section>
    );
}
