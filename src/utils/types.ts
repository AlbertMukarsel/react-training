export type Character = {
    id: number;
    name: string;
    status:string;
    species:string;
    gender:string;
    img_url:string;
    alias: string[];
    origin: string;
    abilities: string[];
}

export type InformationArray = {
    characterList: Character[];
}
