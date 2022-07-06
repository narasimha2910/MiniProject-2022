import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>Welcome <Link to="/docs">Docs</Link></div>
  )
}

export default Welcome