import React, { useEffect, useMemo, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import type { ImageMetadata } from "astro";

interface Props {
  images: ImageMetadata[];
}

const MAX_VISIBLE_THUMBS = 6;

const ProjectSlider: React.FC<Props> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const hasImages = images.length > 0;

  const activeImage = useMemo(() => {
    if (!hasImages) return null;
    return images[Math.min(activeIndex, images.length - 1)];
  }, [activeIndex, hasImages, images]);

  const thumbImages = useMemo(
    () => images.slice(0, Math.min(images.length, MAX_VISIBLE_THUMBS)),
    [images]
  );

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [activeIndex, images]);

  if (!hasImages) {
    return (
      <div className="surface rounded-2xl border-dashed p-6 text-sm text-muted">
        Aucun visuel disponible pour ce projet.
      </div>
    );
  }

  return (
    <PhotoProvider maskOpacity={0.9}>
      <div className="space-y-3">
        <PhotoView src={activeImage?.src ?? ""}>
          <div
            className="surface relative cursor-zoom-in overflow-hidden rounded-[1.2rem] p-2 transition duration-300 hover:-translate-y-[2px] active:scale-[0.98]"
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                event.currentTarget.click();
              }
            }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[0.95rem] bg-[color:var(--surface-strong)]">
              {!isLoaded && !hasError && <div className="skeleton-shimmer absolute inset-0" />}

              {hasError ? (
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-muted">
                  Impossible de charger ce visuel.
                </div>
              ) : (
                <img
                  src={activeImage?.src}
                  alt={`Aperçu ${activeIndex + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="relative z-[1] h-full w-full object-cover"
                  ref={(node) => {
                    if (node?.complete) {
                      setIsLoaded(true);
                    }
                  }}
                  onLoad={() => setIsLoaded(true)}
                  onError={() => {
                    setHasError(true);
                    setIsLoaded(false);
                  }}
                />
              )}
            </div>
          </div>
        </PhotoView>

        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1 pr-1">
            {thumbImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="surface relative min-w-[92px] overflow-hidden rounded-xl p-1 transition duration-300 hover:-translate-y-[1px] active:scale-[0.98]"
                style={{
                  borderColor:
                    index === activeIndex
                      ? "color-mix(in srgb, var(--accent-solid) 68%, transparent)"
                      : undefined,
                }}
                aria-label={`Afficher l'image ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={`Miniature ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-[92px] rounded-lg object-cover"
                />
              </button>
            ))}

            {images.length > MAX_VISIBLE_THUMBS && (
              <div className="surface inline-flex min-w-[92px] items-center justify-center rounded-xl px-3 text-xs text-muted">
                +{images.length - MAX_VISIBLE_THUMBS}
              </div>
            )}
          </div>
        )}
        <div className="hidden" aria-hidden="true">
          {images
            .filter((_, index) => index !== activeIndex)
            .map((image, index) => (
              <PhotoView key={`hidden-${image.src}-${index}`} src={image.src}>
                <img src={image.src} alt="" className="hidden" />
              </PhotoView>
            ))}
        </div>
      </div>
    </PhotoProvider>
  );
};

export default React.memo(ProjectSlider);
