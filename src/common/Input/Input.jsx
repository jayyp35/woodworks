import React from 'react';
import './input.css';

function Input({
  placeholder = "",
  value,
  onChange,
  label,
  style
}) {
  return (
    <div className="field field_v1" style={{ width: "100%", ...style }}>
      <label className="ha-screen-reader">{label ?? ""}</label>
      <input id="first-name" className="field__input" placeholder={placeholder ?? ""} value={value} onChange={(e) => onChange(e.target.value)} />
      <span className="field__label-wrap" aria-hidden="true">
        <span className="field__label">{label}</span>
      </span>
    </div>
  )
}

export default Input