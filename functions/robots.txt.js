// Staging copies (hibiscus2.pages.dev and every branch preview) tell all crawlers to stay out.
// hibiscus2.com itself gets the normal robots.txt file from hibiscus2-site/.
export async function onRequest(context) {
  const host = new URL(context.request.url).hostname;
  if (host.endsWith(".pages.dev")) {
    return new Response("User-agent: *\nDisallow: /\n", {
      headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex" },
    });
  }
  return context.next();
}
