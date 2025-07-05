import PortfolioImg from '@/public/images/portfolio-img.jpg';
import MainImage from '@/public/images/blog-img-wide.jpg';
import cothink from '@/public/images/blog-img-wide.jpg';

export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "Recent",
        title2Span: "Works",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    projects: [
        {
            title: 'CoThink',
            slug: 'first',
            description: 'An AI-driven platform designed to support researchers, educators, and students in co-developing academic content and collaborative projects. CoThink leverages GPT-based tools to accelerate ideation, research structuring, and writing-bridging gaps in access to high-quality academic support. Built to democratize knowledge creation and enhance productivity in educational environments worldwide.',
            services: [
                { name: 'List item' },
                { name: 'List item' },
            ],
            client: 'FlaTheme',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            duration: '121 hours',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            mainImage: PortfolioImg,
            mainImageWide: MainImage,
            images: [
                { image: PortfolioImg },
                { image: PortfolioImg },
            ],
            categories: [
                { name: 'AI' },
                { name: 'EdTech' },
                { name: 'Platform Development' }
            ],
        },
        {
            title: 'Project Title Here',
            slug: 'second',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            services: [
                { name: 'List item' },
                { name: 'List item' },
            ],
            client: 'FlaTheme',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            duration: '121 hours',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            mainImage: PortfolioImg,
            mainImageWide: MainImage,
            images: [
                { image: PortfolioImg },
                { image: PortfolioImg },
            ],
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
        },
        {
            title: 'Project Title Here',
            slug: 'third',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            services: [
                { name: 'List item' },
                { name: 'List item' },
            ],
            client: 'FlaTheme',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            duration: '121 hours',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            mainImage: PortfolioImg,
            mainImageWide: MainImage,
            images: [
                { image: PortfolioImg },
                { image: PortfolioImg },
            ],
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
        },
    ]
};