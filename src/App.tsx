import React from 'react';
import {useState} from 'react';
import './App.css';
import Input from './components/input';
import ToDoList from './components/to_do_list/to_do_list';

function App() {
  const [input_task, set_input_task] = useState<string>('');

  type Task = {
    id: number;
    content: string;
    isDone: boolean;
    remove_me: (id: number) => void;
  };

  const add_to_list = (e: React.FormEvent) => {
    e.preventDefault();
    set_list(prev => {
      const new_task: Task = {
        id: prev.length,
        content: input_task,
        isDone: true,
        remove_me: remove_me,
      };
      set_input_task('');
      const new_list: Task[] = prev.concat(new_task);
      return new_list;
    });
  };

  const remove_me = (id: number) => {
    set_list(prev => {
      prev.splice(id, 1);
      const new_list: Task[] = prev.map((task, index) => {
        return {
          id: index,
          content: task.content,
          isDone: true,
          remove_me: task.remove_me,
        };
      });
      console.log(new_list);
      return new_list;
    });
  };

  const [list, set_list] = useState<Task[]>([]);

  return (
    <div className="App">
      <h1>Not to do list</h1>
      <Input
        input_task={input_task}
        set_input_task={set_input_task}
        add_to_list={add_to_list}
      />
      <ToDoList list={list} />
    </div>
  );
}

export default App;
