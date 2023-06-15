import { ZeusScalars, Chain } from './zeus';
import { createStorefrontClient } from '@shopify/hydrogen-react';
import pkg from "../../../test.js";
const { NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN, NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION, NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN } = pkg;
export const storeDomain = NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN as string;
export const publicStorefrontToken = NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN as string;
export const storefrontApiVersion = NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION as string;

const { getStorefrontApiUrl, getPublicTokenHeaders } = createStorefrontClient({
  storeDomain,
  storefrontApiVersion,
  publicStorefrontToken,
});

const chain = Chain(getStorefrontApiUrl(), {
  headers: getPublicTokenHeaders(),
});

const scalars = ZeusScalars({
  URL: {
    encode: (e) => e as string,
    decode: (e) => e as string,
  },
  Decimal: {
    encode: (e) => e as string,
    decode: (e) => e as string,
  },
});

export const storefront = {
  query: chain('query', {
    scalars,
  }),
  mutation: chain('mutation', {
    scalars,
  }),
};

export * from './zeus';
