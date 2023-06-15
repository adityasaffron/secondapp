import * as dotenv from 'dotenv';
import { execSync } from 'child_process';
import pkg from "./test.js";
const { NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN, NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION, NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN } = pkg;
dotenv.config();

const storeDomain = NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const publicStorefrontToken = NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN;
const storefrontApiVersion = NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION;

const apiEndpoint = storeDomain + `/api/${storefrontApiVersion}/graphql.json`;

execSync(
  `npx zeus ${apiEndpoint} ./src/utilities/storefront --header=X-Shopify-Storefront-Access-Token:${publicStorefrontToken}`,
  {
    stdio: 'inherit',
  }
);
