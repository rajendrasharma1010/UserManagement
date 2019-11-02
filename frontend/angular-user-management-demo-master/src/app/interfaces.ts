export interface Interfaces {
}

export interface Name {
    first: string;
    last: string;
}

export interface User {
    readonly id: string;
    name: {
        [key: string]: Name
    };
    email: string;
    picture?: string;
    description: string;
    display?: boolean;
}

export interface HighlightMeOption {
    size?: string;
    color?: string;
    type?: string;
}