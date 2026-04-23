// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"01-shielded-pools.mdx": () => import("../content/docs/01-shielded-pools.mdx?collection=docs"), "02-private-swaps.mdx": () => import("../content/docs/02-private-swaps.mdx?collection=docs"), "03-private-perpetuals.mdx": () => import("../content/docs/03-private-perpetuals.mdx?collection=docs"), "04-private-lending.mdx": () => import("../content/docs/04-private-lending.mdx?collection=docs"), "05-sealed-bid-auctions.mdx": () => import("../content/docs/05-sealed-bid-auctions.mdx?collection=docs"), "06-mev-protection.mdx": () => import("../content/docs/06-mev-protection.mdx?collection=docs"), "07-private-yield.mdx": () => import("../content/docs/07-private-yield.mdx?collection=docs"), "08-confidential-governance.mdx": () => import("../content/docs/08-confidential-governance.mdx?collection=docs"), "09-selective-disclosure.mdx": () => import("../content/docs/09-selective-disclosure.mdx?collection=docs"), "10-private-rwa.mdx": () => import("../content/docs/10-private-rwa.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), }),
};
export default browserCollections;