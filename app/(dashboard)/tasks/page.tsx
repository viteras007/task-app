import { Plus } from 'lucide-react'
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

export default function Tasks() {
  return (
    <>
      <Dialog>
        <div className="flex gap-5 px-24 pb-12 items-center">
          <h2 className="pb-2 text-3xl font-semibold antialiased tracking-tight">
            Today
          </h2>
          <span className="text-2xl font-bold">5</span>
        </div>
        <div className="flex flex-col items-center px-24">
          <div className="w-full">
            <div className="flex border-t border-b border-slate-200 px-4 py-2">
              <DialogTrigger asChild>
                <button>
                  <span className="flex gap-4 items-center cursor-pointer">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm">Add New Task</span>
                  </span>
                </button>
              </DialogTrigger>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4 border-b border-slate-200 px-4 py-2">
              <input type="checkbox" />
              <span>tarefa</span>
            </div>
          </div>
        </div>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name" className="text-right">
                Task
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
