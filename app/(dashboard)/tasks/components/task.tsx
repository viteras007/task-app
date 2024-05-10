'use client'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Plus } from 'lucide-react'
import AddTaskDialog from '@/app/(dashboard)/tasks/components/addTaskDialog'
import TaskItem from '@/app/(dashboard)/tasks/components/taskItem'
import { useTask } from '@/hooks/useTask'

export default function Task() {
  const { tasks } = useTask()
  return (
    <Dialog>
      <div className="flex gap-5 px-24 pb-12 items-center">
        <h2 className="pb-2 text-3xl font-semibold antialiased tracking-tight">
          Today
        </h2>
        <span className="text-3xl font-semibold">{tasks.length}</span>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col items-center justify-center px-24 lg:w-4/6 md:w-full">
          <div className="w-full">
            <div className="flex border-t border-b border-slate-200 px-4 py-2">
              <DialogTrigger asChild>
                <button>
                  <span className="flex gap-4 items-center cursor-pointer">
                    <Plus className="w-5 h-5" />
                    <span className="text-md">Add New Task</span>
                  </span>
                </button>
              </DialogTrigger>
            </div>
          </div>
          <div className="flex flex-col w-full text-md">
            {tasks && tasks.map((task) => <TaskItem key={task.id} {...task} />)}
          </div>
        </div>
      </div>
      <AddTaskDialog />
    </Dialog>
  )
}
