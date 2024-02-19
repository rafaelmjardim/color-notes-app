export type NoteREQ = {
    id: string,
    value: NoteType
}

export type NoteType = {
    txt: string
    date: string
    color?: string
}