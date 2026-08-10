import { useState } from "react"
import { InputAdd } from "./components/InputAdd"

export function App() {
  const [list, setList] = useState([
    { id: '1', label: 'Fazer Café', complete: false },
    { id: '2', label: 'Fazer Almoço', complete: false },
    { id: '3', label: 'Fazer Janta', complete: false }
  ])

  const handleAdd = (value: string) => {
    setList([
      ...list,
      {
        id: (list.length + 1).toString(),
        label: value,
        complete: false
      }
    ])
  }

  return (
    <div>
      <InputAdd onAdd={(value) => {handleAdd(value)}} />

      <ol>
        {list.map((listItem => (
          <li key={listItem.id}>
            {listItem.complete ? 'COMPLETO' : ''}

            {listItem.label}
            <button
              onClick={() => setList(list.map(item => ({ ...item, complete: item.id === listItem.id ? true : item.complete })))}
            >
              Concluir
            </button>
            <button
              onClick={() => setList(list.filter(item => item.id !== listItem.id))}
            >
              Remover
            </button>
          </li>
        )))}
      </ol>
    </div>
  )
}