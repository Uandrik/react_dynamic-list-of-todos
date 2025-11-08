import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
  selectedTodo: Todo | null;
  onSelected: (user: Todo) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  selectedTodo,
  onSelected,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => (
        <tr key={todo.id} data-cy="todo" className="">
          <td className="is-vcentered">{todo.id}</td>
          <td className="is-vcentered">
            {todo.completed && (
              <span className="icon" data-cy="iconCompleted">
                <i className="fas fa-check"></i>
              </span>
            )}
          </td>
          <td className="is-vcentered is-expanded">
            <p className={`has-text-${todo.completed ? 'success' : 'danger'}`}>
              {todo.title}
            </p>
          </td>
          <td className="has-text-right is-vcentered">
            <button
              onClick={() => onSelected(todo)}
              data-cy="selectButton"
              className="button"
              type="button"
            >
              <span className="icon">
                <i className={`far fa-eye${selectedTodo ? '-slash' : ''}`} />
              </span>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
