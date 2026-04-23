// @ts-nocheck
import * as __fd_glob_11 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/10-private-rwa.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/09-selective-disclosure.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/08-confidential-governance.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/07-private-yield.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/06-mev-protection.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/05-sealed-bid-auctions.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/04-private-lending.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/03-private-perpetuals.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/02-private-swaps.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/01-shielded-pools.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"01-shielded-pools.mdx": __fd_glob_1, "02-private-swaps.mdx": __fd_glob_2, "03-private-perpetuals.mdx": __fd_glob_3, "04-private-lending.mdx": __fd_glob_4, "05-sealed-bid-auctions.mdx": __fd_glob_5, "06-mev-protection.mdx": __fd_glob_6, "07-private-yield.mdx": __fd_glob_7, "08-confidential-governance.mdx": __fd_glob_8, "09-selective-disclosure.mdx": __fd_glob_9, "10-private-rwa.mdx": __fd_glob_10, "index.mdx": __fd_glob_11, });