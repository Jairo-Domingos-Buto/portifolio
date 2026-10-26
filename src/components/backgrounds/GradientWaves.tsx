import { useEffect, useRef } from "react";

interface GradientWavesProps {
  className?: string;
}

export function GradientWaves({ className = "" }: GradientWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let animationFrame = 0;
    let frame = 0;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * pixelRatio;
      canvas.height = canvas.clientHeight * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const time = reducedMotion ? 0 : frame * 0.006;

      context.clearRect(0, 0, width, height);
      const waves = [
        {
          color: "rgba(14, 116, 144, 0.42)",
          offset: height * 0.68,
          amplitude: height * 0.1,
          speed: 1.6,
        },
        {
          color: "rgba(245, 158, 21, 0.42)",
          offset: height * 0.78,
          amplitude: height * 0.07,
          speed: 1.42,
        },
      ];

      waves.forEach(({ color, offset, amplitude, speed }) => {
        context.beginPath();
        context.moveTo(0, height);
        context.lineTo(0, offset);

        for (let x = 0; x <= width; x += 12) {
          const progress = x / width;
          const y =
            offset +
            Math.sin(progress * Math.PI * 2.4 + time * speed) * amplitude +
            Math.sin(progress * Math.PI * 5 - time * speed * 0.7) *
              amplitude *
              0.32;
          context.lineTo(x, y);
        }

        context.lineTo(width, height);
        context.closePath();
        context.fillStyle = color;
        context.fill();
      });

      if (!reducedMotion) {
        frame += 1;
        animationFrame = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
