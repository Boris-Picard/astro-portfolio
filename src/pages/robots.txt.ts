import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL, llmsURL: URL) => `
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${sitemapURL.href}

# LLM context file
# llms.txt: ${llmsURL.href}
`;

export const GET: APIRoute = ({ site }) => {
    const sitemapURL = new URL('sitemap-index.xml', site);
    const llmsURL = new URL('llms.txt', site);
    return new Response(getRobotsTxt(sitemapURL, llmsURL), {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};
