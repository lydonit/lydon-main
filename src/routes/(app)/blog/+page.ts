import type { Entry, RichTextContent } from "contentful";
import client from "src/lib/db";

export async function load() {
  async function getBlog() {
    const entries = await client.getEntries({ content_type: "blog" });
    const blog = entries.items as Entry<{
      title: string;
      description: RichTextContent;
      date: string;
      author: string;
    }>[];

    blog.sort((x, y) => (x.fields.date < y.fields.date ? -1 : 1)).reverse();

    return blog;
  }

  return {
    blog: await getBlog(),
  };
}
