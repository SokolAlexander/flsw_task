export function formatDate(timestamp: number) {
  const date = new Date(timestamp);

  return `${date.toTimeString().substring(0, 5)} ${date.toDateString()}`;
}
