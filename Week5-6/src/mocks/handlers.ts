import { HttpResponse, http } from "msw";

const allPosts = new Map();

export const handlers = [
  http.get("/posts", () => {
    console.log('Captured a "GET /posts" request');
    return HttpResponse.json(Array.from(allPosts.values()));
  }),

  http.post("/posts", async ({ request }) => {
    console.log('Captured a "POST /posts" request');
    console.log(request);
  }),

  http.delete("/posts/:id", ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`);

    const { id } = params;

    const deletedPost = allPosts.get(id);

    if (!deletedPost) {
      return new HttpResponse(null, { status: 404 });
    }

    allPosts.delete(id);

    return HttpResponse.json(deletedPost);
  }),
];
