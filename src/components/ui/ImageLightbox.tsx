import { useEffect, useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './ImageLightbox.css';

interface ImageLightboxProps {
    images: string[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
    projectTitle: string;
}

const ImageLightbox = ({ images, initialIndex, isOpen, onClose, projectTitle }: ImageLightboxProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right' | null>(null);

    // Reset index when opening with new initial index
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
        }
    }, [isOpen, initialIndex]);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return;

        switch (e.key) {
            case 'Escape':
                onClose();
                break;
            case 'ArrowLeft':
                goToPrevious();
                break;
            case 'ArrowRight':
                goToNext();
                break;
        }
    }, [isOpen, onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const goToPrevious = () => {
        if (isAnimating) return;
        setDirection('left');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            setIsAnimating(false);
        }, 150);
    };

    const goToNext = () => {
        if (isAnimating) return;
        setDirection('right');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            setIsAnimating(false);
        }, 150);
    };

    const goToIndex = (index: number) => {
        if (isAnimating || index === currentIndex) return;
        setDirection(index > currentIndex ? 'right' : 'left');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsAnimating(false);
        }, 150);
    };

    if (!isOpen) return null;

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
                    <X size={24} />
                </button>

                {/* Project Title */}
                <div className="lightbox-title">
                    <h3>{projectTitle}</h3>
                    <span className="lightbox-counter">
                        {currentIndex + 1} / {images.length}
                    </span>
                </div>

                {/* Main Image */}
                <div className="lightbox-image-wrapper">
                    <img
                        src={images[currentIndex]}
                        alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                        className={`lightbox-image ${isAnimating ? `slide-out-${direction}` : 'slide-in'}`}
                    />
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            className="lightbox-nav lightbox-nav-prev"
                            onClick={goToPrevious}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            className="lightbox-nav lightbox-nav-next"
                            onClick={goToNext}
                            aria-label="Next image"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </>
                )}

                {/* Dot Indicators */}
                {images.length > 1 && (
                    <div className="lightbox-dots">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`lightbox-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToIndex(index)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Thumbnail Strip */}
                <div className="lightbox-thumbnails">
                    {images.map((src, index) => (
                        <button
                            key={index}
                            className={`lightbox-thumbnail ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToIndex(index)}
                        >
                            <img src={src} alt={`Thumbnail ${index + 1}`} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageLightbox;
