import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export default function TaskManager() {
  // Store the list of tasks
  const [tasks, setTasks] = useState([]);
  
  // Initialize the custom form hook with default values
  const { values, handleChange, resetForm } = useForm({
    title: '',
    priority: 'Low',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prevent adding empty tasks
    if (!values.title.trim()) return; 

    // Add the new task to the existing task list state
    setTasks([...tasks, values]);
    
    // Clear the form inputs
    resetForm();
  };

  return (
    <div className="task-manager">
      <h2>EcoTrack Dashboard</h2>
      
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Task Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Enter a new task"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority: </label>
          <select
            id="priority"
            name="priority"
            value={values.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button type="submit">Add Task</button>
      </form>

      <div className="task-list">
        <h3>Current Tasks</h3>
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                <strong>{task.title}</strong> | {task.priority}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}