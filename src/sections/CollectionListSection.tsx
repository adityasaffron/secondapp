import { storefront } from '@site/utilities/storefront';
import { NextLink, useState, useAsyncFn, DataProps } from '@site/utilities/deps';

export async function fetchCollectionListSection(cursor?: string) {
    const { collections } = await storefront.query({
        collections: [
            { first: 12, after: cursor || null },
            {
                pageInfo: {
                    hasNextPage: true,
                },
                edges: {
                    cursor: true,
                    node: {
                        id: true,
                        title: true,
                        handle: true,
                    },
                },
            },
        ],
    });

    return collections;
}

export function CollectionListSection(props: DataProps<typeof fetchCollectionListSection>) {
    const [pages, setPages] = useState([props.data]);
    const lastPage = pages[pages.length - 1];
    const lastCursor = lastPage.edges[lastPage.edges.length - 1].cursor;
    const hasNextPage = lastPage.pageInfo.hasNextPage;

    const [loader, load] = useAsyncFn(async () => {
        const collectionList = await fetchCollectionListSection(lastCursor);
        setPages([...pages, collectionList]);
    }, [lastCursor]);

    return (
        <section>
            <h2 className="sr-only">Collections</h2>
            <div className="mb-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {pages
                    .flatMap(({ edges }) => edges)
                    .map(({ node }) => (
                        <NextLink key={node.id} href={`/collections/${node.handle}`} className="group">
                            <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                                {/* Add collection image component or styling here */}
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{node.title}</h3>
                        </NextLink>
                    ))}
            </div>

            {hasNextPage && (
                <div className="text-center">
                    {/* Add load more button component or styling here */}
                </div>
            )}
        </section>
    );
}
