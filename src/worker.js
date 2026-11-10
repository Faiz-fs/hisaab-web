export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/hisaab-release.apk") {
      if (request.method !== "GET" && request.method !== "HEAD") {
        return new Response("Method Not Allowed", {
          status: 405,
          headers: { Allow: "GET, HEAD" },
        });
      }

      const object = await env.HISAAB_RELEASES.get("app-release.apk");

      if (!object) {
        return new Response("APK not found", {
          status: 404,
        });
      }

      const headers = new Headers();

      headers.set("Content-Type", "application/vnd.android.package-archive");

      headers.set(
        "Content-Disposition",
        'attachment; filename="hisaab-release.apk"',
      );

      headers.set("Content-Length", String(object.size));
      headers.set("Cache-Control", "public, max-age=3600");

      if (object.httpEtag) {
        headers.set("ETag", object.httpEtag);
      }

      return new Response(request.method === "HEAD" ? null : object.body, {
        status: 200,
        headers,
      });
    }

    return env.ASSETS.fetch(request);
  },
};
