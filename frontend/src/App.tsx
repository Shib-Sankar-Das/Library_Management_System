import React from 'react';
import './App.css';
const App:React.FC=()=> {
  fetch('api/view-book/All').then(res=>res.text()).then(data=>{
    const cnt=document.getElementById('book-container');
    console.log(data);
    (cnt as HTMLDivElement).innerHTML = data;
  })
  return (
  <div id='book-container' className='flex flex-row'>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="./fall_back_cover.jpeg" alt="Book Cover"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Book Name</div>
        <p className="text-gray-700 text-base">Author: Author Name</p>
        <p className="text-gray-700 text-base">Subject: Subject Name</p>
        <p className="text-gray-700 text-base">Publisher: Publisher Name</p>
      </div>
    </div>

  </div>
  )
}
export default App;