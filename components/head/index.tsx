import { default as NextHead } from "next/head";
interface Props {
    pageTitle: string;
    pageDescription: string;
    metaTitle: string;
    metaDescription: string;
    metaImage: string;
    metaUrl: string;
}
const Head: React.FC<Props> = ({ pageTitle, pageDescription, metaTitle, metaDescription, metaImage, metaUrl }) => {
    return (
        <NextHead>
            <title>{pageTitle}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={pageDescription} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={metaUrl} />
        </NextHead>
    )
}

export default Head;