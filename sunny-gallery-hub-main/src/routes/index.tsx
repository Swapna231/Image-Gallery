import { createFileRoute } from "@tanstack/react-router";
import { ImageGallery } from "@/components/ImageGallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Responsive Image Gallery" },
      { name: "description", content: "A beautiful responsive image gallery with category filtering and lightbox navigation. Browse stunning photography from nature, city, and animals." },
      { property: "og:title", content: "Responsive Image Gallery" },
      { property: "og:description", content: "A beautiful responsive image gallery with category filtering and lightbox navigation." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-colorful min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ImageGallery />
      </div>
    </main>
  );
}
