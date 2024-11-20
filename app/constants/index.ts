export interface NavigationItem {
  id: string; // Assuming IDs are always strings
  title: string; // Title of the navigation item
  url: string; // URL or anchor for navigation
  onlyMobile?: boolean; // Optional property to indicate mobile-only visibility
}

export const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About Us",
    url: "#about",
  },
  {
    id: "2",
    title: "Problem",
    url: "#problem",
  },
  {
    id: "3",
    title: "Solutions",
    url: "#solutions",
  },
  {
    id: "4",
    title: "Get App",
    url: "#getapp",
  },
  {
    id: "5",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "6",
    title: "Sign In",
    url: "#signin",
    onlyMobile: true,
  },
];
