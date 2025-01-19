export interface applicationData {
    id?: number
    title?: string
    company?: string
    location?: string
    type?: string
    industry?: string
    status?: string
    apply_date?: string
    interview_date?: string
    reject_date?: string
    notes?: string
}

export interface sorting {
    sortcol: string
    filtercol: string
    filterdata: string
}
