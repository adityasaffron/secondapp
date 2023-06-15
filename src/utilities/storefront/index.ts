import { ZeusScalars, Chain } from './zeus';
import { createStorefrontClient } from '@shopify/hydrogen-react';

export const storeDomain = "https://adityashop123.myshopify.com" as string;
export const publicStorefrontToken = "61921ea93aba563e845ef290cb5916c6" as string;
export const storefrontApiVersion = "2023-04" as string;

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
