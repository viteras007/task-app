'use client'
import React, { createContext, useEffect, useState } from 'react'

export interface Task {
  id: number
  title: string
  status: 'todo' | 'done'
  createdAt: Date
}

export interface TaskContextType {
  tasks: Task[]
  addTask: (newTask: Task) => void
  removeTask: (taskId: number) => void
  changeTaskStatus: (taskId: number) => void
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)

interface TaskProviderProps {
  children: React.ReactNode
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('task-app:tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
  })

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

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask])
  }

  const removeTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  useEffect(() => {
    localStorage.setItem('task-app:tasks', JSON.stringify(tasks))
  }, [tasks])
  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, changeTaskStatus }}
    >
      {children}
    </TaskContext.Provider>
  )
}
