import React from 'react';
import './TodosLoading.css';

function TodosLoading () {
  return (
<div class="loader">
    <div class="cube">
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
