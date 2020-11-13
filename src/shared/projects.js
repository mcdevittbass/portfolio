import { baseUrl } from '../shared/baseUrl';

export const PROJECTS = [
    {
        key: 0,
        id: 'fp-bootstrap',
        title: 'Five Points Bakery,', 
        subtitle: 'HTML, CSS/SCSS/Bootstrap, JQuery',
        code: 'https://github.com/mcdevittbass/FivePointsBakeryBootstrap',
        site: 'https://mcdevittbass.github.io/FivePointsBakeryBootstrap/',
        text: 'This was the beginning of the Five Points Bakery website - using HTML and Bootstrap. It includes modals, carousels, forms, and custom buttons. I later converted it to React and continued to work on it as a SPA. The React version should be launching as their official website in 2020.',
        thumbnail: baseUrl + '/img/FP-Homepage-cropped.png',
        alt: 'Five Points Bakery, Bootstrap'
    },
    {
        key: 1,
        id: 'fp-react',
        title: "Five Points Bakery,",
        subtitle: "React, SCSS/Reactstrap",
        code: 'https://github.com/mcdevittbass/FivePointsReact',
        site: 'https://mcdevittbass.github.io/FivePointsReact/',
        text: 'The Five Points Bakery website began as a design using HTML, CSS/SCSS/Bootstrap, and JQuery. I later converted it to React. Many of the components are reusable (and reused!) blocks of code. It should be launching as their official website in 2020.',
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
        key: 4,
        id: 'hysterics-patch',
        title: "Hysterics",
        subtitle: "Max Patch",
        patch: baseUrl + '/img/Hysterics-screenshot.png',
        performance: 'https://www.youtube.com/watch?v=2AQ5UxXgKl0',
        text: 'This piece took a track and manipulated it at varying speeds and pitch shifts, eventually looping and dissintigrating. There are also pitch shifts from the instrument input, and some hysterical laughter from one of the performers (me). It was written for my double bass duo, Shade and Light, in 2018.',
        thumbnail: baseUrl + '/img/Hysterics-screenshot.png',
        alt: 'Max Patch for piece "Hysterics"'
    },
    {
        key: 5,
        id: 'chat-bot',
        title: "Thesaurus Chat Bot",
        code: 'https://github.com/mcdevittbass/chat-bot-thesaurus',
        text: 'I made this project during a MintBean Hackathon. It uses Merriam Webster\'s thesaurus API and Botkit library for Node.',
        site: 'https://chat-bot-by-megan.herokuapp.com/',
        thumbnail: baseUrl + '/img/chat-bot-photo.png',
        alt: 'Thesaurus Chat Bot site'
    },
    {
        key: 6,
        id: 'space-game',
        title: "Intergalactic Trash Collector",
        code: 'https://github.com/mcdevittbass/game-day',
        text: 'This is a MintBean Hackathon project. It uses Phaser JS. Try to collect space garbage before you get hit by an asteroid!',
        site: 'https://mcdevittbass.github.io/game-day',
        thumbnail: baseUrl + '/img/ITC-photo.png',
        alt: 'Intergalactic Trash Collector game'
    },
    {
        key: 7,
        id: 'to-do',
        title: "Simple To Do App",
        code: 'https://github.com/mcdevittbass/to-do',
        text: 'This simple to-do app uses React and Ant Design. It is deployed on Github Pages.',
        site: 'https://mcdevittbass.github.io/to-do',
        thumbnail: baseUrl + '/img/to-do.png',
        alt: 'To Do App'
    },
    {
        key: 8,
        id: 'in-out-patch',
        title: "IN/OUT for double bass, electronics, and Mugic motion sensor",
        subtitle: "Max Patch",
        patch: baseUrl + '/img/in-out-photo.png',
        performance: 'https://www.youtube.com/watch?v=a7S4gw2sFx8',
        text: 'I wrote and performed this piece in the Future Music Lab program at Atlantic Music Festival in the summer of 2017. I made the patch for the audio as well as visual components, both of which contained triggers from the motion sensor. I also performed the piece on bass.',
        thumbnail: baseUrl + '/img/in-out-photo.png',
        alt: 'Max Patch for piece "IN/OUT"'
    },
    {
        key: 9,
        id: 'circle-up',
        title: "Circle Up",
        code: 'https://github.com/mcdevittbass/circle-time',
        text: 'This app was created for Neutral Zone in Ann Arbor. It is designed to facilitate conversations among their students, with the ability to contribute words based on a prompt and pass a talking stick around the circle. It was made using React and Konva.',
        site: 'https://circle-up.herokuapp.com/',
        thumbnail: baseUrl + '/img/circle-up.png',
        alt: 'Circle Up App'
    },
    {
        key: 10,
        id: 'autocomplete',
        title: 'Autocomplete', 
        subtitle: 'Vanilla JS, HTML/CSS',
        code: 'https://github.com/mcdevittbass/autocomplete',
        text: 'This is a vanilla Javascript project that has created four autocomplete elements with an instantiated class. It can handle local data as well as API calls. There is no public site, but if you are curious, feel free to clone the repo and run it yourself!',
        thumbnail: baseUrl + '/img/autocompleteThumbnail.png',
        alt: 'Autocomplete'
    }
];