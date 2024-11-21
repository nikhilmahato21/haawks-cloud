declare module "tailwindcss/lib/util/flattenColorPalette" {
  type TailwindColors = Record<string, string | Record<string, string>>;

  const flattenColorPalette: (colors: TailwindColors) => Record<string, string>;
  export default flattenColorPalette;
}
