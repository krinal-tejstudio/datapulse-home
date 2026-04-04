import { useEffect } from "react";
import { useLocation } from "react-router";

type SeoProps = {
    title: string;
    description: string;
    canonicalPath?: string;
};

function upsertMetaByName(name: string, content: string) {
    const head = document.head;
    let el = head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
    const head = document.head;
    let el = head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
    const head = document.head;
    let el = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        head.appendChild(el);
    }
    el.setAttribute("href", href);
}

function getSiteOrigin(): string {
    const fromEnv = (import.meta as any)?.env?.VITE_SITE_URL as string | undefined;
    if (fromEnv && typeof fromEnv === "string") return fromEnv.replace(/\/+$/, "");
    return window.location.origin;
}

export default function Seo({ title, description, canonicalPath }: SeoProps) {
    const location = useLocation();

    useEffect(() => {
        const origin = getSiteOrigin();
        const path = canonicalPath ?? location.pathname;
        const canonicalUrl = `${origin}${path.startsWith("/") ? "" : "/"}${path}`;

        document.title = title;
        upsertMetaByName("description", description);

        upsertCanonical(canonicalUrl);

        // Basic social previews (safe defaults)
        upsertMetaByProperty("og:title", title);
        upsertMetaByProperty("og:description", description);
        upsertMetaByProperty("og:url", canonicalUrl);
        upsertMetaByProperty("og:type", "website");
        upsertMetaByName("twitter:card", "summary");
        upsertMetaByName("twitter:title", title);
        upsertMetaByName("twitter:description", description);
    }, [title, description, canonicalPath, location.pathname]);

    return null;
}

