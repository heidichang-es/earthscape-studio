/**
 * Pages Functions middleware: hostname canonicalization.
 *
 * Cloudflare Pages does not expose a "primary domain" toggle for projects
 * with a single custom domain in our account UI, so we enforce the
 * canonical apex by hand. Every *.pages.dev hit gets a true 301 to the
 * matching path on earthscape-studio.com. All other requests fall through
 * to the static asset pipeline via `next()`.
 *
 * Runs on every request (functions/_middleware.js is the catch-all hook).
 * Adds ~1ms; comfortably inside the free-tier 100k requests/day limit.
 */

const CANONICAL_HOST = 'earthscape-studio.com';

export const onRequest = async ({ request, next }) => {
  const url = new URL(request.url);

  if (url.hostname.endsWith('.pages.dev')) {
    url.hostname = CANONICAL_HOST;
    return Response.redirect(url.toString(), 301);
  }

  return next();
};
