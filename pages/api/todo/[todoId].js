import { getTodoById, updateTodoById } from '@/lib/prisma/todo'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { todoId } = req.query
      const { todo, error } = await getTodoById(todoId)
      if (error) throw new Error(error)
      return res.status(200).json({ todo })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  if (req.method === 'POST') {
    try {
      const { todoId } = req.query
      const updatedTodo = req.body
      const { update, error } = await updateTodoById(todoId, updatedTodo)
      console.log('update', update)
      if (error) throw new Error(error)
      return res.status(200).json({ update })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler