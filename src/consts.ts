// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "ShigureのFuton";
export const SITE_TITLE = "ShigureのFuton";
export const SITE_DESCRIPTION = "時雨の布団へようこそ";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Shin";
export const USER_AVATAR = "https://raw.githubusercontent.com/shigure-no-wokka/pic_bed/main/imgs/shigure_3.jpg";


// Server and transition settings
export const SERVER_URL = "";
// export const SERVER_URL = "https://demo.saroprock.com";

const MyGitHub = "https://github.com/shigure-no-wokka";

const AllBlogs = "/blog";
const CodeBlogs = "/blog/categories/Code";
const DevBlogs = "/blog/categories/Dev";
const EngineBlogs = "/blog/categories/Engine";
const FragBlogs = "/blog/categories/Frag";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "About", href: MyGitHub, svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "Blogs",
    href: AllBlogs,
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href:  AllBlogs,
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "code",
        text: "Code",
        href: CodeBlogs,
        svg: "project",
        target: "_self",
      },
      {
        id: "dev",
        text: "Development",
        href: DevBlogs,
        svg: "categories",
        target: "_self",
      },
      {
        id: "engine",
        text: "Engine",
        href: EngineBlogs,
        svg: "cube",
        target: "_self",
      },
      {
        id: "frag",
        text: "Fragment",
        href: FragBlogs,
        svg: "heart",
        target: "_self",
      },
    ],
  }, // Blog page with sub-items
  // project 和 friend 在 pages/ 下
//   {
//     id: "project",
//     text: "Project",
//     href: "/project",
//     svg: "project",
//     target: "_self",
//   }, // Projects page
//   {
//     id: "friend",
//     text: "Friend",
//     href: "/friend",
//     svg: "friend",
//     target: "_self",
//   }, // Friends page
  {
    id: "contact",
    text: "Contact",
    href: "mailto:contact.soutakushin@gmail.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
//   {
//     href: "https://afdian.net/a/saroprock",
//     ariaLabel: "Support my work",
//     title: "Support my work",
//     svg: "support",
//   },
  {
    href: "https://github.com/shigure-no-wokka",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/34432437",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
//   {
//     href: "/rss.xml",
//     ariaLabel: "RSS Feed",
//     title: "RSS Feed",
//     svg: "rss",
//   },
];
