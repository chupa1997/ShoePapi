export const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') next()
  else res.status(403).json({ message: 'Admin only' })
}

export default function adminMiddleware(req, res, next) {
  if (!req.user) return res.status(401).json({ message: 'Not authenticated' })
  if (req.user.role !== 'admin')
    return res.status(403).json({ message: 'Admin access only' })
  next()
}
