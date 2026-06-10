import { useState, useMemo } from "react";
import { ImageLightbox } from "./ImageLightbox";
import { galleryImages, categories, type Category } from "@/lib/gallery-data";

export function ImageGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (id: number) => {
    setLightboxImage(id);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const goToNext = () => {
    if (lightboxImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setLightboxImage(filteredImages[nextIndex].id);
  };

  const goToPrev = () => {
    if (lightboxImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxImage(filteredImages[prevIndex].id);
  };

  const currentLightboxImage = lightboxImage !== null
    ? filteredImages.find((img) => img.id === lightboxImage)
    : undefined;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl">
          Image Gallery
        </h1>
        <p className="mt-3 text-white/80">
          Browse our curated collection of stunning photography
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`
              relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300
              ${
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-500 hover:shadow-xl"
            style={{
              animationDelay: `${index * 80}ms`,
            }}
            onClick={() => openLightbox(image.id)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
              />
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
              <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-lg font-semibold text-white drop-shadow-lg">
                  {image.title}
                </p>
                <p className="mt-1 text-sm text-white/80 capitalize">
                  {image.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredImages.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-muted-foreground">No images found in this category.</p>
        </div>
      )}

      {/* Lightbox */}
      {currentLightboxImage && (
        <ImageLightbox
          image={currentLightboxImage}
          images={filteredImages}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      )}
    </div>
  );
}
