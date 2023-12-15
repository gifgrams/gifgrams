// Original author: Cooper Saye

/**
 * returns class name built with given style data
 * @param styles array of element type string or [string, boolean]
 * @returns string concatenation of classNames based on conditionals
 * @example styleBuilder(["a", "b"]) -> "a b"
 * @example styleBuilder(["a", ["b", condition]]) -> "a b" if condition else "a"
 */
export default function styleBuilder(styles) {
  const usedStyles = [];
  for (const style of styles) {
    if (!style) continue;
    if (typeof style === "string") usedStyles.push(style);
    else {
      const [styleValue, condition] = style;
      if (condition) usedStyles.push(styleValue);
    }
  }
  return usedStyles.join(" ") || undefined;
}
