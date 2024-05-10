import { Checkbox } from '@/components/ui/checkbox'
import { Trash } from 'lucide-react'
import { useTask } from '@/hooks/useTask'
import { ITask } from '@/app/(dashboard)/tasks/model/task.model'

export default function TaskItem(task: ITask) {
  const { changeTaskStatus, removeTask } = useTask()
  return (
    <div
      key={task.id}
      className="flex w-full gap-4 border-b border-slate-200 px-4 py-2 items-center "
    >
      <Checkbox
        onClick={() => changeTaskStatus(task.id)}
        checked={task.status === 'done'}
      />
      <span className={task.status === 'done' ? 'line-through' : ''}>
        {task.title}
      </span>

      <div className="ml-auto">
        <Trash
          className="w-4 h-4 cursor-pointer text-red-500"
          onClick={() => removeTask(task.id)}
        />
      </div>
    </div>
  )
}
