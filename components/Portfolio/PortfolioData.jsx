import PortfolioImg from '@/public/images/portfolio-img.jpg';
import MainImage from '@/public/images/blog-img-wide.jpg';
import cothink from '@/public/images/cothink.png';
import cothink2 from '@/public/images/cothink2.png';
import cothink3 from '@/public/images/Proffesor-view.png';
import screen1 from '@/public/images/screen1.png';
import screen2 from '@/public/images/screen2.png';
import screen3 from '@/public/images/screen3.png';

export const portfolioData = {
    mainData: {
        title: "Selected Projects",
        title2: "My Own & Clients",
        title2Span: "Works",
        description: "A mix of projects I've launched - from personal ventures to client solutions"
    },
    projects: [
        {
            title: 'CoThink.AI - my startup',
            slug: 'first',
            description: 'To equip educators with strategies to teach in an AI-driven world and to guide students in using AI tools like ChatGPT as learning companions - not crutches - so they can solve complex problems with deep understanding, not just surface-level answers.',
            services: [
                { name: 'Research' },
                { name: 'Education' },
                { name: 'AI' },
                { name: 'AI' },
            ],
            client: 'Myself',
            projectLink: {
                title: 'cothinkai.com',
                url: 'cothinkai.com'
            },
            duration: '12 months',
            content: `
  <div class="formatted-project-content">
    <h2><strong>I help professors transform old materials into AI-friendly assignments.</strong></h2>

    <h3><strong>Problem</strong></h3>
    <p>
      Most universities struggle to integrate AI into teaching. Only top-tier institutions have access to custom AI tools. Meanwhile, professors at regular schools face outdated systems and lack the resources to turn their materials into AI-friendly formats.
    </p>

    <h3><strong>Solution</strong></h3>
    <p>
      CoThink helps educators to easily redesign assignments for the AI era – teaching students how to think with AI, not just use it. Every professor becomes AI-enabled, and every student learns like they’re at a top school.
    </p>

    <h3><strong>Product</strong></h3>
    <ul>
      <li><strong>AI Assignment Creator</strong> – helps professors design assignments that connect AI with critical thinking</li>
      <li><strong>AI Study Companion</strong> – guides students step-by-step to think with AI, not rely on it</li>
      <li><strong>Personal Projects</strong> – students develop what they care about – learning by doing</li>
      <li><strong>Learn & Explain</strong> – students don’t just use AI, they explain results and build deep understanding</li>
      <li><strong>LMS-Ready</strong> – easily connects with Canvas, Moodle, Populi, and more</li>
    </ul>

    <p><strong>CoThink brings elite AI learning to every classroom.</strong></p>
  </div>
`,
            mainImage: cothink,
            mainImageWide: screen1,
            images: [
                { image: screen2 },
                { image: screen3 },
            ],
            categories: [
                { name: 'AI' },
                { name: 'EdTech' },
                { name: 'Platform Development' }
            ],
        },
        {
            title: 'STREETVERS - Roguelike',
            slug: 'second',
            description: 'STREETVERS is a gritty, fast-paced roguelike shooter set in the streets of Los Angeles. The game blends wave-based combat, strategic territory control, and a deep meta-progression system. Players fight to dominate districts, deliver premium weed, and upgrade weapons and character stats through a satisfying death-and-retry loop.',
            services: [
                { name: 'Unity' },
                { name: 'Game Development' },
            ],
            client: 'Myself',
            projectLink: {
                title: 'streetvers.com',
                url: 'streetvers.com'
            },
            duration: '24 months',
            content: 'Start from Long Beach and clear turf district by district: Torrance, Compton, Santa Monica, Downtown LA, and Hollywood. Each area throws increasingly difficult enemy waves at the player, culminating in intense police raids. Capturing turf unlocks passive income, while premium deliveries offer big payouts. Players unlock and upgrade a variety of weapons-handgun, shotgun, assault rifle, sniper rifle - and invest in permanent stat boosts like reload speed, damage, and cash gain. With each run, players get stronger, unlocking new characters, perks, and paths to domination.',
            mainImage: cothink2,
            mainImageWide: MainImage,
            images: [
                { image: PortfolioImg },
                { image: PortfolioImg },
            ],
            categories: [
                { name: 'Unity Game' },
                { name: 'Roguelike Shooter' },
                { name: 'Urban Combat' }
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
            mainImage: cothink3,
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
            mainImage: cothink3,
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
            mainImage: cothink3,
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
            mainImage: cothink3,
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

