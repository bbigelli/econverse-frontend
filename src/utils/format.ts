export const fmt = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export const oldPrice = (n: number) => fmt(n * 1.1)
export const installment = (n: number) => fmt(n / 2)
