'use client'
import { Plus, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useTask } from '@/hooks/useTask'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Checkbox } from '@/components/ui/checkbox'

const schema = z.object({
  name: z.string().min(3).max(50).nonempty(),
})

type FormData = z.infer<typeof schema>

export default function Tasks() {
  const { tasks, addTask, changeTaskStatus, removeTask } = useTask()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: FormData) {
    addTask({
      id: Math.floor(Math.random() * 1000),
      title: data.name,
      status: 'todo',
    })
  }

  return (
    <Dialog>
      <div className="flex gap-5 px-24 pb-12 items-center">
        <h2 className="pb-2 text-3xl font-semibold antialiased tracking-tight">
          Today
        </h2>
        <span className="text-3xl font-semibold">{tasks.length}</span>
      </div>
      <div className="flex flex-col items-center px-24">
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
          {tasks &&
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex w-full gap-4 border-b border-slate-200 px-4 py-2 items-center "
              >
                <Checkbox
                  onClick={() => changeTaskStatus(task.id)}
                  checked={task.status === 'done'}
                />
                <span>{task.title}</span>

                <div className="ml-auto">
                  <Trash
                    className="w-4 h-4 cursor-pointer text-red-500"
                    onClick={() => removeTask(task.id)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="name">Task</Label>
            <Input id="name" {...register('name')} />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
