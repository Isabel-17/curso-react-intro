import React from 'react';
import './TodosLoading.css';

function TodosLoading () {
  return (
<div className="loader">
    <div className="cube">
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
    </div>
</div>
  );
}

export { TodosLoading };
