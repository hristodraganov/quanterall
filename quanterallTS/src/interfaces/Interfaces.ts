//dont know if its good practice to keep them separated, looks cleaner

export interface FormNode {
    from: string,
    to: string,
    pricePerDay: number,
    added: number
}

export interface Props {
    from: string,
    to: string,
    added: number,
    pricePerDay: number
}