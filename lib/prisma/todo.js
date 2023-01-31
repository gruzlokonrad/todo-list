import { data } from 'autoprefixer';
import prisma from '.';

export async function getTodo() {
  try {
    const allTodo = await prisma.todo.findMany()
    return { allTodo }
  } catch (error) {
    return { error }
  }
}

export async function createTodo(todo) {
  try {
    const newTodo = await prisma.todo.create({
      data: {
        title: todo.replaceAll('"', '')
      }
    })
    return { todo: newTodo }
  } catch (error) {
    return { error }
  }
}

export async function getTodoById(todoId) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id: todoId } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function updateTodoById(todoId, updatedTodo) {
  try {
    const todo = JSON.parse(updatedTodo)
    const update = await prisma.todo.update({
      where: { id: todoId },
      data: {completed: !updatedTodo.completed},
    })
    return { update }
  } catch (error) {
    return { error }
  }
}