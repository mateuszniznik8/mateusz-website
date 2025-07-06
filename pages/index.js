import Head from 'next/head'
import { mainData } from '@/lib/data'
import { About, Media, Blog, Clients, Contact, Hero, Portfolio, Services, Testimonial } from '@/components'

export default function Home() {
    return (
        <>
            <Head>
                <title>{mainData.websiteTitle}</title>
                <meta name="description" content={mainData.description} />
                <meta name="keywords" content={mainData.keywords} />
            </Head>
            <main>
                {/* Hero section */}
                <Hero />
                {/* About section */}
                <About />
                {/* Services section */}
                <Services />
                {/* Clients section */}
                <Clients />
                {/* Portfolio section */}
                <Portfolio />
                {/* Media section */}
                <Media />
                {/* Testimonial section */}
                <Testimonial />
                {/* Blog section */}
                <Blog />
                {/* Contact section */}
                <Contact />
                {/* Footer section */}
            </main>
        </>
    )
}
