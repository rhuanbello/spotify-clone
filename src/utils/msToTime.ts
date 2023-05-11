export const msToTime = (ms: number | null) => {
  if (!ms) return '0:00';
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
