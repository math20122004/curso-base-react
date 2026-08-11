interface ITodoItem {
    id: string
    label: string
    complete: boolean
    onRemove(): void
    onComplete(): void
}

export const TodoItem = ({ id, label, complete, onRemove, onComplete }: ITodoItem) => {

    return (
        <li key={id}>
            {complete ? 'COMPLETO' : ''}

            {label}
            <button onClick={onComplete} >
                Concluir
            </button>
            <button
                onClick={onRemove}
            >
                Remover
            </button>
        </li>
    )
}