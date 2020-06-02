import { baseUrl } from '../shared/baseUrl';

export const PROJECTS = [
    {
        key: 0,
        id: 'fp-bootstrap',
        title: 'Five Points Bakery,', 
        subtitle: 'using Bootstrap',
        code: 'https://github.com/mcdevittbass/FivePointsBakeryBootstrap',
        site: 'https://mcdevittbass.github.io/FivePointsBakeryBootstrap/',
        text: 'The Five Points Bakery website began as a design using Bootstrap. It includes modals, carousels, forms, and custom buttons. I later converted it to React. It should be launching as their official website in 2020.',
        thumbnail: baseUrl + '/img/FP-Homepage-cropped.png',
        alt: 'Five Points Bakery, Bootstrap'
    },
    {
        key: 1,
        id: 'fp-react',
        title: "Five Points Bakery,",
        subtitle: "in React",
        code: 'https://github.com/mcdevittbass/FivePointsReact',
        site: 'https://mcdevittbass.github.io/FivePointsReact/',
        text: 'The Five Points Bakery website began as a design using Bootstrap. I later converted it to React. Many of the components are reusable (and reused!) blocks of code. It should be launching as their official website in 2020.',
        thumbnail: baseUrl + '/img/FP-events-cropped.png',
        alt: 'Five Points Bakery, React'
    },
    {
        key: 2,
        id: 'portfolio',
        title: "This Portfolio Site",
        code: 'https://github.com/mcdevittbass/portfolio',
        text: 'I hope you are enjoying this website I created in React!',
        thumbnail: baseUrl + '/img/portfolio-site-whole.png',
        alt: 'Portfolio Site, Megan McDevitt'
    },
    {
        key: 3,
        id: 'raw-patch',
        title: "On the raw and the cooked",
        subtitle: "Max Patch",
        patch: baseUrl + '/img/On-the-raw-patch.png',
        performance: 'https://www.youtube.com/watch?v=WbuLw3Yd0j8',
        text: 'I wrote this piece for double bass and electronics for one of my dissertation recitals in 2016. I made the electronic sounds and effects using Max/MSP.',
        thumbnail: baseUrl + '/img/On-the-raw-rev-patch.png',
        alt: 'Max Patch for piece "On the raw and the cooked"'
    },
    {
        key: 3,
        id: 'hysterics-patch',
        title: "Hysterics",
        subtitle: "Max Patch",
        patch: baseUrl + '/img/Hysterics-screenshot.png',
        performance: 'https://www.youtube.com/watch?v=2AQ5UxXgKl0',
        text: 'This piece took a track and manipulated it at varying speeds and pitch shifts, eventually looping and dissintigrating. There are also pitch shifts from the instrument input, and some hysterical laughter from one of the performers (me). It was written for my double bass duo, Shade and Light, in 2018.',
        thumbnail: baseUrl + '/img/Hysterics-screenshot.png',
        alt: 'Max Patch for piece "Hysterics"'
    }
];