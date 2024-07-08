export interface IPosts{
    posts:IPost[];
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
}