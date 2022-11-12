import React from 'react';

type Task = {
  id: number;
  content: string;
  isDone: boolean;
  remove_me: (id: number) => void;
};

type Props = {
  task: Task;
};

export default function NotToDO({task}: Props) {
  return (
    <div>
      {task.content}
      <button
        onClick={() => {
          task.remove_me(task.id);
          console.log('button');
        }}
      >
        remove
      </button>
    </div>
  );
}
