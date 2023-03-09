import React from "react";

type InputProps = {
    id?: number,
    title: string,
    isDone: boolean
}

type TodoProps = {
    title: string
    inputData: Array<InputProps>
    buttonData: string[]
}


export function TodoList(props: TodoProps) {
    const ListElements =
        props.inputData.map(el => {
                return (
                    <li>
                        <input type='checkbox' checked={el.isDone}/><span>{el.title}</span>
                    </li>
                )
            }
        )
    const ButtonElements =
        props.buttonData.map(el => {
            return (
                <button>{el}</button>
            )
        })
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {ListElements}
                {/*<li><input type="checkbox" checked={props.inputData[0].isDone}/><span>{props.inputData[0].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.inputData[1].isDone}/><span>{props.inputData[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.inputData[2].isDone}/><span>{props.inputData[2].title}</span></li>*/}
            </ul>
            <div>
                {ButtonElements}
                {/*<button>All</button>*/}
                {/*<button>Active</button>*/}
                {/*<button>Complited</button>*/}
            </div>
        </div>
    )
}