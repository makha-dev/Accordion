import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [show, setShow] = useState(false);

  return (
    <section className='question'>
      <header>
        <h4 className='title'>{title}</h4>
        <button className='btn' onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus>}
        </button>
      </header>
      <h5 className='info'>{show ? info : ""}</h5>
    </section>
    );
};

export default Question;
