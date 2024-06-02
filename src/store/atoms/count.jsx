import { atom, selector } from "recoil";

export const todoAtom = atom({
    key: "todoAtom",
    default: [], // array of objects
})

export const filterAtom = atom({
    key: 'filterAtom',
    default: ''
})

export const filterTodo = selector({
    key: "filterTodo",
    get: ({get}) => {
        const todos = get(todoAtom);
        const filter = get(filterAtom);
        const filteredTodo = todos.filter((todo) => (todo.title.includes(filter) || todo.description.includes(filter)));
        return filteredTodo;
    }
})
