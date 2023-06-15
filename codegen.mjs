import * as dotenv from 'dotenv';
import { execSync } from 'child_process';

dotenv.config();

const storeDomain = "https://adityashop123.myshopify.com";
const publicStorefrontToken = "61921ea93aba563e845ef290cb5916c6";
const storefrontApiVersion = "2023-04";

const apiEndpoint = storeDomain + `/api/${storefrontApiVersion}/graphql.json`;

execSync(
  `npx zeus ${apiEndpoint} ./src/utilities/storefront --header=X-Shopify-Storefront-Access-Token:${publicStorefrontToken}`,
  {
    stdio: 'inherit',
  }
);
