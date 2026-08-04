export function getProjectMediaPath(slug: string, filename: string): string {
  if (!filename) return '';
  if (filename.startsWith('http') || filename.startsWith('/')) {
    return filename;
  }
  return `/images/projects/${slug}/${filename}`;
}

export function isExternalUrl(url: string): boolean {
  if (!url) return false;
  return url.startsWith('http://') || url.startsWith('https://');
}

export function getVideoType(url: string): 'youtube' | 'vimeo' | 'local' | 'none' {
  if (!url) return 'none';
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
  if (url.includes('vimeo.com')) return 'vimeo';
  if (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg')) return 'local';
  return 'none';
}

export function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export function getVimeoId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/vimeo.*\/(\d+)/i);
  if (match?.[1]) {
    return match[1];
  }
  return null;
}
