import React from 'react';

export default function InputField({
  name,
  id,
  label,
  type,
  className,
  value,
  onChange,
  errors,
}) {
  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={id}>
          {label}:
        </label>
      )}
      <input
        id={id}
        type={type}
        className="form-input"
        value={value}
        onChange={onChange}
      />
      {errors && <div className="form-error">{errors[0]}</div>}
    </div>
  );
}
