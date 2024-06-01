
export function formatDateMask(value: string): string {
  return value.replace(/^(\d{2})(\d{2})(\d{4})$/, "$1/$2/$3");
}

export function formatTimeMask(value: string): string {
  return value.replace(/^(\d{2})(\d{2})$/, "$1:$2");
}