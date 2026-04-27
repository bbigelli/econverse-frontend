import React from 'react'
import { Category } from '../../types'
import './CategoryTabs.scss'

const TABS: Category[] = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS']

interface Props {
  active: Category
  onChange: (c: Category) => void
}

const CategoryTabs: React.FC<Props> = ({ active, onChange }) => (
  <nav className="ctabs" aria-label="Filtrar por categoria">
    {TABS.map(t => (
      <button
        key={t}
        className={`ctabs__item${active === t ? ' ctabs__item--active' : ''}`}
        onClick={() => onChange(t)}
        aria-pressed={active === t}
      >{t}</button>
    ))}
  </nav>
)

export default CategoryTabs
