function TextAreaField({ label, name, value, onChange, placeholder }) {
    return (
      <div>
        <label className="block text-gray-700 font-medium">{label}</label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="4"
          className="mt-1 p-3 w-full border rounded-lg focus:ring focus:ring-blue-200"
        ></textarea>
      </div>
    );
  }
export default TextAreaField;