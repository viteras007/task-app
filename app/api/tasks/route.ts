import { NextRequest, NextResponse } from 'next/server'
import { tasks } from '@/app/api/tasks/data'

export async function GET() {
  try {
    return NextResponse.json(tasks)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }
    return NextResponse.json(
      {
        message: 'Houve um erro ao buscar marcas. Tente novamente mais tarde.',
      },
      { status: 500, statusText: 'Internal Server Error.' },
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    tasks.push({
      ...body,
      id: tasks.length + 1,
    })
    return NextResponse.json(tasks)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }
    return NextResponse.json(
      {
        message: 'Houve um erro ao buscar marcas. Tente novamente mais tarde.',
      },
      { status: 500, statusText: 'Internal Server Error.' },
    )
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json()
    const tasksFiltered = tasks.filter((task) => task.id !== id)
    return NextResponse.json(tasksFiltered)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: 'error' })
  }
}
