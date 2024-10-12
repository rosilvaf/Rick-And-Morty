export interface Character{
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: Gender,
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

export const EmptyCharacter: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: Gender.MALE,
    origin:  {
        name: '',
        link: ''
    },
    location:  {
        name: '',
        link: ''
    },
    image: '', 
    episode: [],
    url: '',
    created: ''
}
