export interface TodoModel{
    "userID": number,
    "id": number,
    "title": string,
    "completed": boolean
}

export interface TodoArrayModel{
    all_todos:TodoModel[],
    particular_todo:TodoModel
}
