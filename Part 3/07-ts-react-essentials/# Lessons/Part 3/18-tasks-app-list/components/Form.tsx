import { useState } from 'react'
import { type Task } from '../task'

type FormProps = {
  addTask: (task: Task) => void
}

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!text) {
      alert('Please enter a task')
      return
    }

    const task: Task = {
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    }

    addTask(task)
    setText('')
  }

  return (
    <form className='form task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-input'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='btn'>Add Task</button>
    </form>
  )
}

export default Form