import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div
        className="relative -mx-4 md:-mx-8 -mt-4 md:-mt-8 mb-8 rounded-xl overflow-hidden border border-brown-dim/40 bg-cover bg-center"
        style={{ backgroundImage: "url('/whitepaper.png')" }}
      >
        <div className="absolute inset-0 bg-background/70 pointer-events-none" />
        <div className="relative px-6 md:px-12 py-16 md:py-24 lg:py-28">
          <DocsTitle className="!text-5xl md:!text-6xl lg:!text-7xl font-bold tracking-tight leading-[1.05]">
            {page.data.title}
          </DocsTitle>
          <DocsDescription className="!text-lg md:!text-xl mt-5 max-w-3xl">
            {page.data.description}
          </DocsDescription>
        </div>
      </div>
      <DocsBody>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
  return {
    title: `${page.data.title} · Caecus Whitepaper`,
    description: page.data.description,
  };
}
