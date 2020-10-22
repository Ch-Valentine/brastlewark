export const filter = (data, string) => {
  if (!string) return data;

  return data.filter((gnome) => gnome.searchable.includes(string.toLowerCase()));
}
