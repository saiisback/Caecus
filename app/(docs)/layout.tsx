import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      theme={{
        enabled: true,
        defaultTheme: "dark",
        attribute: "class",
      }}
    >
      <DocsLayout
        tree={source.pageTree}
        nav={{
          title: (
            <span className="font-bold tracking-tighter text-primary">
              Caecus · Whitepaper
            </span>
          ),
        }}
        sidebar={{
          className: "caecus-sidebar",
        }}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
