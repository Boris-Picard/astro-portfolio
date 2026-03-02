import type { APIRoute } from "astro";

const getLlmsTxt = (siteUrl: URL) => {
  const home = siteUrl.href;

  return `# Boris Picard - Portfolio

> Portfolio professionnel de Boris Picard, developpeur web full-stack base a Strasbourg (France).

## A propos

- Nom: Boris Picard
- Role: Developpeur full-stack
- Localisation: Strasbourg, France
- Contact: mailto:picard.boris@outlook.fr
- Site: ${home}

## Sections principales

- Hero / Positionnement: ${home}#hero
- Presentation: ${home}#about
- Competences: ${home}#skills
- Projets: ${home}#projects
- Contact: ${home}#contact

## Projets majeurs

- CESIZen: ${home}#projects
- myCryptoFolio: ${home}#projects
- BlazeRifle: ${home}#projects

## Profils externes

- GitHub: https://github.com/Boris-Picard
- LinkedIn: https://www.linkedin.com/in/boris-picard
`;
};

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response("Site URL is not configured.", { status: 500 });
  }

  return new Response(getLlmsTxt(site), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
