type ToDoItemPropsType = {
  toDo: string
}

function ToDoItem({toDo}: ToDoItemPropsType) {

  return (
    <li>{ toDo }</li>
  );
}

export default ToDoItem;
