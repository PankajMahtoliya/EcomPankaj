export function unslugifyName(slug) {
  // Replace hyphens or underscores with spaces
  const originalName = slug.replace(/[-_]/g, " ");

  // Capitalize the first letter of each word
  const unslugifiedName = originalName.replace(
    /\w+/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return unslugifiedName;
}
