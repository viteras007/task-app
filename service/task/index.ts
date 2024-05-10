import { ITask } from '@/app/(dashboard)/tasks/model/task.model'

export async function getTasksService() {
  try {
    const result = await fetch('http://localhost:3000/api/tasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
    const data = await result.json()
    return data
  } catch (err) {
    console.error(err)
    return null
  }
}

export async function addTaskService(task: ITask) {
  try {
    const result = await fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(task),
    })
    const data = await result.json()
    return data
  } catch (err) {
    console.error(err)
    return null
  }
}

export async function deleteTaskService(id: number) {
  try {
    const response = await fetch(`/api/tasks`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ id }),
    })
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
    return null
  }
}
