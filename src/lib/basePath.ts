/**
 * Get the base path for images and assets
 * In production on GitHub Pages, this will be /rockmary
 * In development, this will be empty string
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

/**
 * Prepend base path to image URLs
 */
export function withBasePath(imagePath: string): string {
  const basePath = getBasePath();
  if (basePath && !imagePath.startsWith(basePath)) {
    return `${basePath}${imagePath}`;
  }
  return imagePath;
}
