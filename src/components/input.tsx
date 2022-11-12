import React from 'react';

type Props = {
  input_task: string;
  set_input_task: React.Dispatch<React.SetStateAction<string>>;
  add_to_list: (e: React.FormEvent) => void;
};

export default function Input({
  input_task,
  set_input_task,
  add_to_list,
}: Props) {
  return (
    <form onSubmit={add_to_list}>
      <input
        placeholder="add task"
        value={input_task}
        onChange={e => {
          set_input_task(e.target.value);
        }}
      ></input>
      <button type="submit">Add Not to do</button>
    </form>
  );
}
