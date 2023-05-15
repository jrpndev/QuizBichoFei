export interface Question {
    id: number,
    subject: string,
    options: [
        { value: string, selected: boolean, correct: boolean },
        { value: string, selected: boolean, correct: boolean },
        { value: string, selected: boolean, correct: boolean },
        { value: string, selected: boolean, correct: boolean }
    ],
    isMarked: boolean,
    img: string,
    area: string
}