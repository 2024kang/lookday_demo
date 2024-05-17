import { useState } from "react";
import "./RegisterForm.css";
import PropTypes from "prop-types"; // 引入 prop-types 模組

const RegisterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const validationErrors = validateField(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: validationErrors[name],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateField = (fieldName, value) => {
    let fieldErrors = {};
    switch (fieldName) {
      case "name":
        if (!value.trim()) {
          fieldErrors.name = "姓名不能為空";
        } else if (value.length < 2) {
          fieldErrors.name = "姓名至少需要兩個字以上";
        } else if (!/^[\u4E00-\u9FA5]+$/.test(value)) {
          fieldErrors.name = "姓名必須全部為中文字";
        }
        break;
      case "password":
        if (!value.trim()) {
          fieldErrors.password = "密碼不能為空";
        } else if (value.length < 6) {
          fieldErrors.password = "密碼至少需要六個字以上";
        } else if (
          !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/.test(value)
        ) {
          fieldErrors.password = "密碼必須包含英數字、特殊字元[!@#$%^&*]";
        }
        break;
      case "dateOfBirth":
        if (!value.trim()) {
          fieldErrors.dateOfBirth = "生日不能為空";
        } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
          fieldErrors.dateOfBirth = "日期格式必須為mm/dd/yyyy";
        }
        break;
      default:
        break;
    }
    return fieldErrors;
  };

  const validateFormData = () => {
    let errors = {};
    // 表單整體驗證邏輯
    return errors;
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">姓名：</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">電子郵件：</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">密碼：</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">生日：</label>
          <input
            type="text" // 將生日欄位改為文本輸入欄位
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          {errors.dateOfBirth && (
            <span className="error-message">{errors.dateOfBirth}</span>
          )}
        </div>
        {/* 刪除註冊按鈕 */}
      </form>
    </div>
  );
};

// props 驗證
RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // 確保 onSubmit 屬性是一個函式並且是必需的
};

export default RegisterForm;
