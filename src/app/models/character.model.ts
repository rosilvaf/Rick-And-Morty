export interface Character{
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gerder: Gender,
    origin: Origin,
    location: Location,
    image: string, 
    episode: string[],
    url: string,
    created: string
}

export enum Gender {
    'MALE' = ' Male', 
    'FEMALE' = 'Female',
    'GENDERLESS' = 'Genderless',
    'UNKNOWN' = 'unknown'
}

export interface CharacterInfo {
    info: Info,
    results: Character[]
}
export interface LinkElement{
    name: string,
    link: string
}
export interface Origin extends LinkElement{

}
export interface Location extends   LinkElement{

}
export interface Info extends   LinkElement{

}