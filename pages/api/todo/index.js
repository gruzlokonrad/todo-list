import { createTodo, getTodo } from '@/lib/prisma/todo'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { allTodo, error } = await getTodo()
      if (error) throw new Error(error)

      return res.status(200).json({ allTodo })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body
      const { newTodo, error } = await createTodo(data)
      if (error) throw new Error(error)

      return res.status(200).json({ newTodo })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
