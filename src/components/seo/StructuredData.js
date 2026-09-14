export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://camaradejauja.org.pe/#organization",
                "name": "Cámara de Comercio de Jauja",
                "alternateName": [
                    "CCJ",
                    "Cámara de Comercio de la Provincia de Jauja"
                ],
                "url": "https://camaradejauja.org.pe",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://camaradejauja.org.pe/logo.png"
                },
                "description": "La Cámara de Comercio de Jauja representa, conecta y fortalece al sector empresarial de la provincia de Jauja mediante capacitación, representación institucional, networking, alianzas y oportunidades de crecimiento.",
                "email": "contact@camaradejauja.org.pe",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Jauja",
                    "addressRegion": "Junín",
                    "addressCountry": "PE"
                },
                "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": "Provincia de Jauja"
                },
                "sameAs": [
                    "https://camaradejauja.org.pe"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://camaradejauja.org.pe/#website",
                "url": "https://camaradejauja.org.pe",
                "name": "Cámara de Comercio de Jauja",
                "description": "Portal institucional de la Cámara de Comercio de Jauja.",
                "inLanguage": "es-PE",
                "publisher": {
                    "@id": "https://camaradejauja.org.pe/#organization"
                }
            },
            {
                "@type": "WebPage",
                "@id": "https://camaradejauja.org.pe/#webpage",
                "url": "https://camaradejauja.org.pe",
                "name": "Cámara de Comercio de Jauja",
                "description": "Impulsamos el crecimiento empresarial de Jauja conectando empresarios, generando oportunidades y fortaleciendo el desarrollo económico de la provincia.",
                "isPartOf": {
                    "@id": "https://camaradejauja.org.pe/#website"
                },
                "about": {
                    "@id": "https://camaradejauja.org.pe/#organization"
                },
                "inLanguage": "es-PE"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData)
            }}
        />
    );
}