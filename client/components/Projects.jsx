import React from 'react'

function Projects () {
  const projects = ['Gaming NFTs', 'Friends NFTs', 'Custom NFTs', 'Pixel NFTs', 'NFT Project']

  return (
    <>
      <section className='projects'>
        {projects.map((item, index) => (
          <div key={index} className='project-card'>{item}</div>
        ))}
      </section>
    </>
  )
}

export default Projects
