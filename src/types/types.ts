export interface JokeInterface {
    "id": string,
    "title": string,
    "body": string,
    "author": string,
    "views": number,
    "createdAt": string
}

export interface AuthState {
    user: string;
}
export interface DangerBtnPropTypes {
    clickHandler: () => void,
    children: string | string[];
}
export interface ThemeInterface {
    theme: string;
}

export interface EditingIdInterface {
    editingId: string;
}

export interface JokeStateInterface {
    joke: JokeInterface;
    editingId: string;
}

export interface PagenationInterface {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    page: any,
    limit: number,
}
export interface PaginationPayloadInterface {
    page: number | string,
}
export interface ItemsPerPagePayloadInterface {
    limit: number,
}
export interface PaginationStateInterface {
    pagination: PagenationInterface
}
