import React, { useState } from 'react'

const Collapse = ({ collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed)

  return (
    <>
      <section
        className='faq collapse-section'
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <p>What are these NFTs?</p>
        <div><i className="fas fa-arrow-circle-down fa-2x"></i></div>
      </section>
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
