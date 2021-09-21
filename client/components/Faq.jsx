import React from 'react'
import Collapse from './Collapse'

function Faq () {
  return (
    <div className='container'>
      <h1>FAQ</h1>
      <Collapse>
        <p>answer</p>
      </Collapse>
      <section className='faq'>
        <p>What are these NFTs?</p>
        <div><i className="fas fa-arrow-circle-down fa-2x"></i></div>
      </section>
      <section className='faq'>
        <p>What are these NFTs?</p>
        <div><i className="fas fa-arrow-circle-down fa-2x"></i></div>
      </section>
    </div>
  )
}

export default Faq
