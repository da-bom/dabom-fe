export const formatGB = (bytes: number): number => {
  const gb = bytes / (1024 * 1024 * 1024);
  return Number(gb.toFixed(1));
};