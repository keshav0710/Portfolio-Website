import { useEffect, useState, useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import './AnimatedCounter.css';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    title: string;
    icon?: React.ReactNode;
}

const AnimatedCounter = ({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    title,
    icon
}: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;
        hasAnimated.current = true;

        const startTime = performance.now();
        const startValue = 0;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return (
        <div ref={ref} className="animated-counter">
            {icon && <div className="counter-icon">{icon}</div>}
            <div className="counter-value">
                {prefix}{count}{suffix}
            </div>
            <div className="counter-title">{title}</div>
        </div>
    );
};

export default AnimatedCounter;
