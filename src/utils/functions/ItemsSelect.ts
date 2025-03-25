export function ItemSelect(items: { key: string; value: string }[] | null) {
  if (!items || items.length === 0) {
    return;
  }

  const indices = [6, 19, 27, 58, 159, 122, 104, 184, 166]; //specific indexes
  const itemSelect = indices.map((index) => items[index]).filter(Boolean);

  return itemSelect;
}
