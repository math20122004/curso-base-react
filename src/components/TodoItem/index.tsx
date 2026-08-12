import TodoItemStyles from './TodoItem.module.css';

interface ITodoItem {
    id: string
    label: string
    complete: boolean
    onRemove(): void
    onComplete(): void
}

export const TodoItem = ({ id, label, complete, onRemove, onComplete }: ITodoItem) => {    
    return (
        <li key={id} className={TodoItemStyles.Item}>
            <span className={TodoItemStyles.Text}>
                {label}
            </span>

            <div className={TodoItemStyles.ButtonsGroup}>
                {<button onClick={onComplete} className={TodoItemStyles.ButtonComplete}>
                    {complete ? 'Concluido' : 'Concluir'}
                </button>}
                <button onClick={onRemove} className={TodoItemStyles.ButtonRemove}>
                    Remover
                </button>
            </div>
        </li>
    )
}