import '@/app/components/car-svg/car-svg.scss';
export const createCarSVG = async (color: string): Promise<SVGElement> => {
  const response = await fetch('./images/car-img.svg');
  const svgText = await response.text();

  const parser = new DOMParser();
  const element = parser.parseFromString(svgText, 'image/svg+xml').documentElement;
  if (element instanceof SVGElement) {
    element.setAttribute('width', '100');
    element.setAttribute('height', '40');

    const paths = element.querySelectorAll('path');
    paths.forEach((path) => {
      path.setAttribute('fill', `${color}`);
    });

    return element;
  }
  throw new Error('no SVG');
};
