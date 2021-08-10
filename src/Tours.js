import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeArticle }) => {
  return (
    <section>
      <div className="title">
        <h2>our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((t) => {
          return <Tour id={t.id} {...t} removeArticle={removeArticle} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
