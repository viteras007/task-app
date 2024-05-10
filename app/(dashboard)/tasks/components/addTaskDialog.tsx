'use client'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTask } from '@/hooks/useTask'
import * as z from 'zod'

const schema = z.object({
  name: z
    .string()
    .min(3, { message: 'Task name should have at least 3 characters' })
    .max(50, { message: 'Task name should have less than 50 characters' }),
})

export type FormData = z.infer<typeof schema>

export default function AddTaskDialog() {
  const { addTask } = useTask()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  function onSubmit(data: FormData) {
    addTask({
      id: Math.floor(Math.random() * 1000),
      title: data.name,
      status: 'todo',
      createdAt: new Date(Date.now()),
    })
    reset({
      name: '',
    })
  }
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Task</DialogTitle>
      </DialogHeader>

      <div className="grid gap-4 py-4">
        <div className="flex flex-col items-start gap-4">
          <Label htmlFor="name">Task</Label>
          <Input id="name" {...register('name')} />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
      </div>
      <DialogFooter>
        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid || isSubmitting}
        >
          Add
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
