import { useEffect, useState } from "react"
import { TodoAPI, type ITodo } from "../shared/services/api/TodoAPI"
import { InputAdd } from "../components/InputAdd"
import { List } from "../components/List"
import { TodoItem } from "../components/TodoItem"
import { PageLayout } from "../shared/layout/page-layout/PageLayout"

export const Home = () => {
    const [list, setList] = useState<ITodo[]>([])

    useEffect(() => {
        TodoAPI.getAll().then(data => setList(data))
    }, [])

    const handleAdd = (value: string) => {
        TodoAPI.create({ label: value, complete: false }).then(data => setList([...list, data]))
    }

    const handleRemove = (id: string) => {
        TodoAPI.deleteById(id).then(() => setList(list.filter(value => value.id !== id)))
    }

    const handleComplete = (id: string) => {
        TodoAPI.updateById(id, { complete: !(list.find(value => value.id === id)?.complete) })
            .then(() => setList([
                ...list.map(item => ({
                    ...item,
                    complete: !(list.find(value => value.id === id)?.complete)
                }))
            ]))
    }

    return (
        <PageLayout title="Página Inicial">
            <InputAdd onAdd={(value) => { handleAdd(value) }} />

            <List>
                {list.map((listItem => (
                    <TodoItem
                        key={listItem.id}

                        id={listItem.id}
                        label={listItem.label}
                        complete={listItem.complete}

                        onRemove={() => handleRemove(listItem.id)}
                        onComplete={() => handleComplete(listItem.id)}
                    />
                )))}
            </List>
        </PageLayout>
    )
}