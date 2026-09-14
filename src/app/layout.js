import { Montserrat } from "next/font/google";
import GeorgiaFont from "next/font/local";
import '@/styles/global.css';
import { Provider } from "@/providers";

const montserrat = Montserrat({
    variable: "--font-base",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const georgia = GeorgiaFont({
    src: '../styles/fonts/Georgia Italic.ttf',
    variable: '--font-georgia',
});

export const metadata = {
    metadataBase: new URL('https://camaradejauja.org.pe'),
    title: {
        default: 'Cámara de Comercio de Jauja',
        template: '%s | Cámara de Comercio de Jauja',
    },
    description: 'La Cámara de Comercio de Jauja impulsa el desarrollo empresarial mediante capacitaciones, entrevistas, representación institucional, networking y oportunidades de crecimiento para empresarios y emprendedores de la provincia de Jauja.',
    keywords: [
        'Cámara de Comercio de Jauja',
        'Jauja',
        'Empresarios de Jauja',
        'Capacitaciones empresariales',
        'Networking empresarial',
        'Desarrollo empresarial',
        'Comercio en Jauja',
        'Empresas en Jauja',
        'Emprendedores Jauja',
        'Junín',
        'Capacitaciones Jauja',
        'Entrevistas empresariales',
        'Representación empresarial',
        'Cámara de Comercio Perú',
        'Asociación empresarial',
        'Sector privado Jauja',
    ],
    authors: [
        {
            name: 'Cámara de Comercio de Jauja',
            url: 'https://camaradejauja.org.pe',
        },
    ],
    creator: 'Cámara de Comercio de Jauja',
    publisher: 'Cámara de Comercio de Jauja',
    category: 'Business',
    classification: 'Business Organization',
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://camaradejauja.org.pe',
    },
    openGraph: {
        type: 'website',
        locale: 'es_PE',
        url: 'https://camaradejauja.org.pe',
        siteName: 'Cámara de Comercio de Jauja',
        title: 'Cámara de Comercio de Jauja',
        description: 'Representamos, capacitamos y conectamos a empresarios, emprendedores e instituciones para construir una provincia más competitiva y próspera.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Cámara de Comercio de Jauja',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cámara de Comercio de Jauja',
        description: 'Impulsamos el desarrollo empresarial de Jauja mediante capacitación, representación institucional y oportunidades de crecimiento.',
        images: ['/og-image.png'],
    },
    verification: {
        google: 'l2_kkRXm-g_cU3AnWoEMrC6tAEluE5P4yYaPOpKSsVQ'
    },
    icons: {
        icon: [
            {
                url: '/favicon.ico',
            },
            {
                url: '/icon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/icon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
        ],
        apple: [
            {
                url: '/apple-touch-icon.png',
                sizes: '180x180',
            },
        ],
        shortcut: '/favicon.ico',
    },
    manifest: '/manifest.json',
    other: {
        'theme-color': '#001B36',
        'color-scheme': 'light',
        'apple-mobile-web-app-status-bar-style': 'default',
    },
};

export default function RootLayout ({ children }) {
    return (
        <html lang="es" className={`${montserrat.variable} ${georgia.variable}`}>
            <body>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    )
}