import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p6 from "./assets/p6.png";
import p7 from "./assets/p7.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Dashboard",
        id: "dashboard",
    },
    {
        name: "Mobile App",
        id: "mobile-app",
    },
    {
        name: "Website",
        id: "website",
    },
];

export const projects = [
    {
        name: "Onchat Mocha App",
        image: p1,
        tags: ["dashboard", "website"],
        link: 'https://onchat-mocha.vercel.app'
    },
    {
        name: "Ecommerce Website",
        image: p2,
        tags: ["dashboard", "website"],
        link: 'https://syedsecommerce.netlify.app'
    },
    {
        name: "MovieX",
        image: p6,
        tags: ["website"],
        link: 'https://movie-tmdb-app-x.netlify.app/'
    },
    {
        name: "Nike Shop",
        image: p7,
        tags: ["website"],
        link: 'https://ecommerce-next-indol.vercel.app/'
    }

];

export const achievements = [
    {
        id: 1,
        year: 10,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 1,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 6,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 0,
        description: "COMMUNITY<br />POSTS",
    },
];
