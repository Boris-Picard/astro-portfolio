import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import type { ImageMetadata } from "astro";

interface Props {
    images: ImageMetadata[];
    theme: {
        border: string;
        primary: string;
        light: string;
    };
}

const ProjectSlider: React.FC<Props> = ({ images, theme }) => {
    return (
        <PhotoProvider maskOpacity={0.95}>
            {/* Image principale visible */}
            <PhotoView src={images[0].src}>
                <div
                    className="project-card aspect-[4/3] rounded-2xl p-1 relative overflow-hidden border cursor-zoom-in group transition-transform duration-300 ease-in-out hover:scale-[1.02] focus:scale-[1.02] outline-none perspective-1000"
                    style={{ borderColor: theme.border }}
                    role="button"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') e.currentTarget.click();
                    }}
                    title={
                        images.length > 1
                            ? `Aperçu du projet. Cliquez pour voir les ${images.length} images en galerie.`
                            : "Aperçu du projet. Cliquez pour agrandir l'image."
                    }
                    tabIndex={0}
                >
                    {/* Halo visuel */}
                    <div
                        className="absolute -inset-[1px] opacity-20 blur-sm pointer-events-none transition-colors duration-500"
                        style={{
                            background: `linear-gradient(to right, transparent, ${theme.primary}, transparent)`,
                        }}
                    />

                    <div className="w-full h-full card-bg rounded-2xl relative overflow-hidden transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                        <img
                            src={images[0].src}
                            alt={`Aperçu visuel du projet`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                        <div
                            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                            style={{
                                background: `linear-gradient(to bottom right, ${theme.light}, rgba(0,0,0,0.03))`,
                            }}
                        />
                    </div>

                    {/* Label au hover */}
                    <div className="absolute bottom-3 left-3 text-xs text-white bg-black/60 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {images.length > 1
                            ? `Cliquez pour voir ${images.length} images`
                            : "Cliquez pour agrandir"}
                    </div>

                    {/* Badge visible si plusieurs images */}
                    {images.length > 1 && (
                        <div
                            className="absolute bottom-3 right-3 text-xs font-medium text-zinc-800 bg-white/80 dark:bg-zinc-800/80 dark:text-white px-3 py-1 rounded-full border shadow-sm backdrop-blur-md transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:translate-y-[-2px]"
                            style={{ borderColor: theme.border }}
                            aria-label={`Galerie contenant ${images.length} images`}
                        >
                            +{images.length - 1} photo{images.length > 2 ? "s" : ""}
                        </div>
                    )}
                </div>
            </PhotoView>

            {/* Galerie invisible mais accessible */}
            <div className="hidden">
                {images.slice(1).map((img, idx) => (
                    <PhotoView key={idx} src={img.src}>
                        <img
                            src={img.src}
                            alt={`Vue ${idx + 2} supplémentaire du projet`}
                            className="hidden"
                            fetchPriority="low"
                        />
                    </PhotoView>
                ))}
            </div>
        </PhotoProvider>
    );
};

export default ProjectSlider;
