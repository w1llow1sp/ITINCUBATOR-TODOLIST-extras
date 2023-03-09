type TasksTypeProps = {
    taskId: number,
    title: string,
    isDone: boolean
}

type dataPropsType = {
    dataTitle: string,
    dataTasks: Array<TasksTypeProps>
    dataList: string[]
}

export const Task = (props: dataPropsType) => {
    const createTasksList = props.dataTasks.map((el, index) => {
        return (
            <li key={el.taskId}><input type={"checkbox"} checked={el.isDone}/>
                <span>{el.title}</span>
            </li>
        )
    })
    const createStudentList = props.dataList.map((el, index) => {
        return (

            <li key={index}><span>{el}</span></li>
        )
    })
    return (
        <div>
            Hello from tasks component!
            <h1>{props.dataTitle}</h1>
            <ul>
                {createTasksList}
            </ul>
            <h1>Students</h1>
            <ul>
                {createStudentList}
            </ul>


        </div>
    )
}