import React from 'react';
import NotToDO from './not_to_do';

type Task = {
  id: number;
  content: string;
  isDone: boolean;
  remove_me: (id: number) => void;
};

type Props = {
  list: Task[];
};

export default function ToDoList({list}: Props) {
  return (
    <>
      {list.map(task => {
        return <NotToDO key={task.id} task={task} />;
      })}
    </>
  );
}
