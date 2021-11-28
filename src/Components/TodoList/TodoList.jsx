import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ myTodos }) {
  // console.log(myTodos);
  return (
    <div>
      {myTodos.map((item) => {
        return <TodoItem title={item.title} status={item.status} />;
      })}
    </div>
  );
}
