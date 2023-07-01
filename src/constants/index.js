import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    innotek,
    threejs,
    freelance,
    bootstrap,
    rick,
    momentos,
    game,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Development",
        icon: web,
    },
    {
        title: "Data Structures and Algorithms (C++)",
        icon: mobile,
    },
    {
        title: "Backend Development",
        icon: backend,
    },
    {
        title: "Database Knowledge",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },

    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "bootstrap",
        icon: bootstrap,
    },

];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Innotek IT Systems",
        icon: innotek,
        iconBg: "#383E56",
        date: "July 2021 - September 2021",
        points: [
            "Lead the team in making the frontend of the Given Project and used techstack was HTML, CSS and JavaScript. We used Bootstrap to make our work more Efficient and easier",
            "Worked as a Frontend developer to create software in accordance with customer needs.",
            "Implementing responsive design and ensuring cross-browser compatibility.",

        ],
    },
    {
        title: "Freelancing",
        company_name: "Various",
        icon: freelance,
        iconBg: "#E6DEDD",
        date: "Feb 2021 - Present",
        points: [
            "Developing fullstack web applications for the commercial use of the owner and their Business was the main goal of the gig.",
            "From Designing and implementing all work was done from start to finish",
            "Implementing responsive design and ensuring cross-browser compatibility.",

        ],
    },

];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Rick and Morty Wiki",
        description:
            "A front-end React application about information about the characters from the science fiction tv series ”rick and morty. ∗ It uses data from the rick and morty public API. ",
        tags: [
            {
                name: "React",
                color: "pink-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
        ],
        image: rick,
        source_code_link: "https://github.com/WassupAditya/RickandMortyWikipedia",
        visit_link: "https://wubaalubbadubdub.netlify.app/",
    },
    {
        name: "Momentos",
        description:
            "The App is called Momentos and it is a social media app that allows users to post interesting events that happened in their lives. Used React, Node.js, Express & MongoDB. MaterialUi provides the styling.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "pink-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
        ],
        image: momentos,
        source_code_link: "https://github.com/WassupAditya/Momentos_backend",
        visit_link: "https://momentos.netlify.app/",
    },
    {
        name: "2048 Game",
        description:
            "2048 is a single-player puzzle game, in which the objective is to slide numbered tiles on a grid to combine them and create a tile with the number 2048. Whole this is made in vanila JavaScript",
        tags: [
            {
                name: "HTML",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",

            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
        ],
        image: game,
        source_code_link: "https://github.com/WassupAditya/2048",
        visit_link: "https://2048-aditya.netlify.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };