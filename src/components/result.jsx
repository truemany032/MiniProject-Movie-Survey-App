function Result({ formData, handleReset }) {
   return (
   <div className="text-center">
            <p className="text-green-600 text-center mb-4">ส่งข้อมูลเรียบร้อย!</p>
            <div className="text-left mb-4">
                <p><strong>ชื่อ:</strong> {formData.name}</p>
                <p><strong>อีเมล:</strong> {formData.email}</p>
                <p><strong>หนังที่เลือก:</strong> {formData.movie}</p>
                <p><strong>ความคิดเห็น:</strong> {formData.comment}</p>
            </div>
            <Button type="button" onClick={handleReset} className="bg-black text-white hover:bg-gray-800">ทำแบบสำรวจใหม่</Button>
            </div>
   );
}

export default Result;