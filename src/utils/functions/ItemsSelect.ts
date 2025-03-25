export function ItemSelect(items: { key: string; value: string }[] | null) {
  if (!items || items.length === 0) {
    return;
  }

  const indices = [6, 19, 27, 47, 151, 59, 80, 74, 123]; //specific indexes
  const itemSelect = indices.map((index) => items[index]).filter(Boolean);

  return itemSelect;
}
