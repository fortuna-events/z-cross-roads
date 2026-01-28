export interface Editor {
    numbersCols: number;
    numbersText: string;
    overlayText: string;
}

export interface Link {
    href: string;
    color: string;
    label: string;
}

export interface Page {
    error: boolean;
    header: string;
    hasColor: boolean;
    links: Link[];
}
