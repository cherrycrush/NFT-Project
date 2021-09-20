import React, { useState } from 'react'

const Collapse = ({ collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed)

  return (
    <>
      <button
        className='collapse-button fas fa-arrow-circle-down fa-2x'
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
      </button>
      <div
        className={`collapse-content ${isCollapsed ? 'expanded' : 'collapsed'}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  )
}

export default Collapse
