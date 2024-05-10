export interface ITask {
  id: number
  title: string
  status: 'todo' | 'done'
  createdAt: Date
}
