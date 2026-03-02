import React, { useEffect, useMemo, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

type ProjectSliderProps = {
  displayImages: string[];
  thumbImages: string[];
  maxVisibleThumbs?: number;
  priority?: boolean;
};

function ProjectSlider({
  displayImages,
  thumbImages,
  maxVisibleThumbs = 6,
  priority = false,
}: ProjectSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const safeDisplayImages = useMemo(
    () => displayImages.filter(Boolean),
    [displayImages],
  );
  const safeThumbImages = useMemo(
    () => thumbImages.filter(Boolean),
    [thumbImages],
  );
  const hasImages = safeDisplayImages.length > 0;

  const activeImage = useMemo(() => {
    if (!hasImages) return null;
    return safeDisplayImages[Math.min(activeIndex, safeDisplayImages.length - 1)];
  }, [activeIndex, hasImages, safeDisplayImages]);

  const thumbSource = safeThumbImages.length > 0 ? safeThumbImages : safeDisplayImages;
  const visibleThumbs = thumbSource.slice(0, maxVisibleThumbs);
  const extraThumbCount = Math.max(0, thumbSource.length - maxVisibleThumbs);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [activeIndex, safeDisplayImages]);

  if (!hasImages || !activeImage) {
    return (
      <div className="surface rounded-2xl border-dashed p-6 text-sm text-muted">
        Aucun visuel disponible pour ce projet.
      </div>
    );
  }

  return (
    <PhotoProvider maskOpacity={0.9}>
      <div className="project-slider-react space-y-3">
        <PhotoView src={activeImage}>
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
                  src={activeImage}
                  alt={`Aperçu ${activeIndex + 1}`}
                  loading={priority && activeIndex === 0 ? "eager" : "lazy"}
                  fetchPriority={priority && activeIndex === 0 ? "high" : "auto"}
                  decoding="async"
                  className="relative z-[1] h-full w-full object-cover"
                  width={1280}
                  height={800}
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

        {thumbSource.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1 pr-1">
            {visibleThumbs.map((thumb, index) => (
              <button
                key={`${thumb}-${index}`}
                type="button"
                aria-label={`Afficher l'image ${index + 1}`}
                aria-current={index === activeIndex ? "true" : "false"}
                className="surface relative min-w-[92px] overflow-hidden rounded-xl p-1 transition duration-300 hover:-translate-y-[1px] active:scale-[0.98]"
                style={
                  index === activeIndex
                    ? {
                        borderColor:
                          "color-mix(in srgb, var(--accent-solid) 68%, transparent)",
                      }
                    : undefined
                }
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={thumb}
                  alt={`Miniature ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-[92px] rounded-lg object-cover"
                  width={92}
                  height={58}
                />
              </button>
            ))}

            {extraThumbCount > 0 && (
              <div className="surface inline-flex min-w-[92px] items-center justify-center rounded-xl px-3 text-xs text-muted">
                +{extraThumbCount}
              </div>
            )}
          </div>
        )}

        <div className="hidden" aria-hidden="true">
          {safeDisplayImages
            .filter((_, index) => index !== activeIndex)
            .map((src, index) => (
              <PhotoView key={`hidden-${src}-${index}`} src={src}>
                <img src={src} alt="" className="hidden" />
              </PhotoView>
            ))}
        </div>
      </div>
    </PhotoProvider>
  );
}

export default React.memo(ProjectSlider);
