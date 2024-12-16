export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  const desin = {
    div1: {
      backgroundColor: 'gray',
      width: '220px',
      border: '2px solid white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
    },
    div2: {
      backgroundColor: 'green',
      margin: '10px',
      color: 'magenta',
      border: '2px solid red',
    },
  };

  return (
    <div style={desin.div1}>
      <h3>Here you go</h3>

      <img
        src="easmile.png"
        alt="name"
        height="50px"
        width="50px"
        style={{
          borderRadius: '30%',
          border: '2px solid white',
        }}
      />

      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <div style={desin.div2}>
              <Task
                task={task}
                onChangeTask={onChangeTask}
                onDeleteTask={onDeleteTask}
              />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Task({ task, onChangeTask, onDeleteTask }) {
  const handleToggleDone = () => {
    onChangeTask({ ...task, done: !task.done });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.done}
        onChange={handleToggleDone}
      />
      <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>delete</button>
    </div>
  );
}
