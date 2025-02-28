import React from 'react';
import { Link } from 'react-router-dom';
const ListTryout = () => {

  const tryouts = [
    {id: 0, title: "Penalaran Matematika", question: 20, duration: 40},
    {id: 1, title: "Penalaran Umum", question: 30, duration: 30},
    {id: 2, title: "Pengetahuan Pemahaman Umum", question: 20, duration: 15},
    {id: 3, title: "Pemahaman Baca dan Menulis", question: 20, duration: 25},
    {id: 4, title: "Pengetahuan Kuantitatif", question: 20, duration: 20},
    {id: 5, title: "Literasi Bahasa Indonesia", question: 25, duration: 37.5},
    {id: 6, title: "Literasi Bahasa Inggris", question: 20, duration: 30}
  ]


  return (
    <div className="tryout-list-container">
      <h3>
        Daftar Tryout
      </h3>
      <ul>
      {tryouts.map((tryout) => (
        <li key={tryout.id}>
          <Link to={`/tryouts/${tryout.id}`}>{tryout.title}</Link> - {tryout.date}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default ListTryout;
