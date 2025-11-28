import { useEffect, useState } from 'react';

/**
 * Hook para crear efecto parallax en elementos
 * @param speed - Velocidad del parallax (0.1 = lento, 1 = normal, 2 = rápido)
 * @returns offset - Desplazamiento en píxeles para aplicar al elemento
 */
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Detectar si es dispositivo táctil
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Reducir velocidad del parallax en dispositivos móviles (50% de la velocidad)
    const adjustedSpeed = isTouchDevice ? speed * 0.5 : speed;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset(scrollY * adjustedSpeed);
    };

    // Inicializar con el scroll actual
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
}
