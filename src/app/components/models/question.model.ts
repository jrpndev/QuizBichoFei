export interface Question {
    id: number,
    subject: string,
    solve: string,
    options: [
        { value: string, label: string, selected: boolean, correct: boolean},
        { value: string, label: string, selected: boolean, correct: boolean},
        { value: string, label: string, selected: boolean, correct: boolean},
        { value: string, label: string, selected: boolean, correct: boolean}
    ],
    isMarked: boolean,
    img: string
}