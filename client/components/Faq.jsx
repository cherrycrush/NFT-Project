import React from 'react'
import Collapse from './Collapse'

function Faq () {
  return (
    <div className='container'>
      <h1>FAQ</h1>
      <section className='faq'>
        <p>What are these NFTs?</p>
        <Collapse>
          <p>answer</p>
        </Collapse>
      </section>
      <section className='faq'>
        <p>What are these NFTs?</p>
        <div className='expand'><i className="fas fa-arrow-circle-down fa-2x"></i></div>
      </section>
      <section className='faq'>
        <p>What are these NFTs?</p>
        <div className='expand'><i className="fas fa-arrow-circle-down fa-2x"></i></div>
      </section>
    </div>
  )
}

export default Faq
