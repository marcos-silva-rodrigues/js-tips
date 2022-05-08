export function zeroFill(n) {
  return n < 9 ? `0${n}` : `${n}`;
}

export function formatDate(date) {
  const d = zeroFill(date.getDate());
  const mo = zeroFill(date.getMonth() + 1);
  const y = zeroFill(date.getFullYear());
  const h = zeroFill(date.getHours());
  const mi = zeroFill(date.getMinutes());
  const s = zeroFill(date.getSeconds());

  return `${d}/${mo}/${y} ${h}:${mi}:${s}`;
}

// ISO 8601
// 20/04/2019
export const stringDate = '2019-04-20T10:00:00-03:00';