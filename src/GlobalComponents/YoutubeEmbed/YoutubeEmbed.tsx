import { type HTMLAttributes } from "react";

interface YoutubeProps extends HTMLAttributes<HTMLIFrameElement> {
    [key: string]: any

    link: string
    width?: number | string
    height?: number | string
    allow?: string
}

export const YoutubeEmbed = ({
    link,
    style = {},
    width = "100%",
    height = 380,
    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    ...props
}: YoutubeProps) => {
    const url = new URL(link);
    return (
        <iframe
            width={width}
            height={height}
            src={link}
            title="YouTube video player"
            allow={allow}
            allowFullScreen>
        </iframe>);
};

export default YoutubeEmbed