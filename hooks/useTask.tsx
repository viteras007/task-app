'use client'
import { useContext } from 'react'
import { TaskContext, TaskContextType } from '@/context/taskContext'

export const useTask = (): TaskContextType => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider')
  }
  return context
}
