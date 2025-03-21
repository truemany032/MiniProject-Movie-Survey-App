import { useState } from "react";
import MovieList from "./movie-list.jsx";
import InputField from "./inputField.jsx";
import TextAreaField from "./textArea.jsx";
import Button from "./Button.jsx"
import Result from "./result.jsx";

export default function InputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    movie: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) 
      newErrors.name = "โปรดใส่ชื่อของคุณ";
    if (!formData.email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/))
      newErrors.email = "โปรดใส่อีเมลของคุณ";
    if (!formData.movie) 
      newErrors.movie = "กรุณาเลือกหนังที่คุณชอบ";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", movie: "", comment: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Movie Survey</h2>
        {submitted ? (
          <Result data={formData} />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField label="ชื่อ *" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="กรุณากรอกชื่อของคุณ" error={errors.name} />
            <InputField label="อีเมล *" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" error={errors.email} />
            <div className={` ${errors.movie ? 'border rounded-lg p-3 mt-2 border-red-500' : ''}`}>
              <label className="block text-gray-700 font-medium">เลือกหนังที่คุณชอบ *</label>
              <MovieList selectedMovie={formData.movie} onChange={handleChange} />
            </div>
            {errors.movie && <p className="text-red-500 text-sm mt-1">{errors.movie}</p>}
            <TextAreaField label="ความคิดเห็นเกี่ยวกับหนัง" name="comment" value={formData.comment} onChange={handleChange} placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..." />
            <div className="flex justify-between">
              <Button type="button" onClick={handleReset} className="bg-gray-200 text-gray-700 hover:bg-gray-300">♻ รีเซ็ต</Button>
              <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-700">✉ ส่งแบบสำรวจ</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}