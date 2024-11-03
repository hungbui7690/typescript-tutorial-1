/*
  main
    h2 
    form.form
      input.form-input
      button.btn
    ul.list
    button.test-btn

*/

const taskForm = document.querySelector('.form') as HTMLFormElement
const formInput = document.querySelector('.form-input') as HTMLInputElement
const taskListElement = document.querySelector('.list') as HTMLUListElement

type Task = {
  description: string
  isCompleted: boolean
}

const tasks: Task[] = loadTasks() // 4. Retrieve tasks from localStorage

tasks.forEach((task) => renderTask(task)) // 5. Render tasks at runtime
// tasks.forEach(renderTask) // alt way

// 3. Load tasks from localStorage
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks')
  return storedTasks ? JSON.parse(storedTasks) : []
}

// 1. Update tasks in localStorage
function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function addTask(task: Task): void {
  tasks.push(task)
}

function renderTask(task: Task): void {
  const taskElement = document.createElement('li')
  taskElement.textContent = task.description
  taskListElement?.appendChild(taskElement)
}

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault()
  const taskDescription = formInput?.value

  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    }
    addTask(task)
    renderTask(task)

    updateStorage() // 2. update local storage

    formInput.value = ''
    return
  }
  alert('Please enter a task description')
})
