import type { Editor, Page } from "./interfaces";

export const DEFAULT_EDITOR: Editor = {
    numbersCols: 0,
    numbersText: "",
    overlayText: "",
};

export const DEFAULT_COLOR_HUE = "120";
export const DEFAULT_COLOR_SAT = "30%";

export const HELP_HEADER = [
    "Title and description (html, <h1> on plain text)",
    `Hue, Saturation (optional, "${DEFAULT_COLOR_HUE}, ${DEFAULT_COLOR_SAT}" by default)`,
];
export const HELP_PART = ["Link", "Label (html)"];

export const SAMPLE_DATA =
    "Where to find me\nhttps://www.youtube.com/watch?v=dQw4w9WgXcQ\n🎥 | My Youtube Channel\nhttps://www.instagram.com/officialrickastley\n📷 | My Instagram Profile\nhttps://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt\n🎵 | My Spotify";

export const DEFAULT_PAGE: Page = {
    error: null,
    header: "",
    hasColor: true,
    links: [],
};
