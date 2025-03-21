import React from 'react';

function Result({ data }) {
  return (
    <div className="bg-green-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">ส่งแบบสำรวจสำเร็จ!</h2>
      <div className="text-left mb-4">
        <p><strong>ชื่อ:</strong> {data.name}</p>
        <p><strong>อีเมล:</strong> {data.email}</p>
        <p><strong>หนังที่เลือก:</strong> {data.movie}</p>
        <p><strong>ความคิดเห็น:</strong> {data.comment}</p>
      </div>
      <button onClick={() => window.location.reload()} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">ทำแบบสำรวจใหม่</button>
    </div>
  );
}

export default Result;