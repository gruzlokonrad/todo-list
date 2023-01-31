import { createUser, getUsers } from '@/lib/prisma/users'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { allUsers, error } = await getUsers()
      if (error) throw new Error(error)
      
      return res.status(200).json({ allUsers })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  
  if (req.method === 'POST') {
    try {
      const data = req.body
      const { users, error } = await createUser(data)
      if (error) throw new Error(error)

      return res.status(200).json({ users })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET','POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
