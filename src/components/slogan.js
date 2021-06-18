import React, { useState, useEffect } from 'react';

function Slogan() {

    const [state, setState] = useState('hide');
    
    useEffect(() => {
        setState( 'show' );
    }, []);

    return (
        <div className={`${state} slogan`} >
          <p>Решението е тук</p>
          <p>Технологичен оазис с неограничени възможности!</p>
        </div>
      );
}

export default Slogan;