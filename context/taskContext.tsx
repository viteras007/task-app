'use client'
import React, { createContext, useEffect, useState } from 'react'
import { ITask } from '@/app/(dashboard)/tasks/model/task.model'
import {
  addTaskService,
  deleteTaskService,
  getTasksService,
} from '@/service/task'

export interface TaskContextType {
  tasks: ITask[]
  addTask: (newTask: ITask) => void
  removeTask: (taskId: number) => void
  changeTaskStatus: (taskId: number) => void
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)

interface TaskProviderProps {
  children: React.ReactNode
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<ITask[]>([])

  const changeTaskStatus = (taskId: number) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId)

    if (taskIndex === -1) {
      throw new Error(`Task with id ${taskId} not found`)
    }

    const updatedTasks = [...tasks]
    updatedTasks[taskIndex] = {
      ...updatedTasks[taskIndex],
      status: updatedTasks[taskIndex].status === 'done' ? 'todo' : 'done',
    }

    setTasks(updatedTasks)
  }

  async function addTask(newTask: ITask) {
    await addTaskService(newTask).then((data: ITask[]) => {
      setTasks(data)
    })
  }

  async function removeTask(taskId: number) {
    await deleteTaskService(taskId).then((data: ITask[]) => {
      setTasks(data)
    })
  }

  useEffect(() => {
    async function fetchTasks() {
      await getTasksService().then((data: ITask[]) => {
        setTasks(data)
      })
    }
    fetchTasks()
  }, [])

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, changeTaskStatus }}
    >
      {children}
    </TaskContext.Provider>
  )
}
