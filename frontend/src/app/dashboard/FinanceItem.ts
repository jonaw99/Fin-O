export interface FinanceItem {
    id: number
    title: string
    type: "income" | "expense"
    amount: number
    date: Date
    category: string
    notes?: string
}