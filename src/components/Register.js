import { useState, useCallback } from "react";
import "./Register.css";

const Register = ({ onInsert }) => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const onChangeSex = useCallback((e) => {
    setSex(e.target.value);
  }, []);
  const onChangeAge = useCallback((e) => {
    setAge(e.target.value);
  }, []);
  const onChangeDepartment = useCallback((e) => {
    setDepartment(e.target.value);
  }, []);
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(name, sex, age, department, email);
      setName("");
      setSex("");
      setAge("");
      setDepartment("");
      setEmail("");
      e.preventDefault();
    },
    [onInsert, name, sex, age, department, email]
  );

  return (
    <div className="new-register">
      <h1>신규 등록</h1>
      <form className="new-register-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="이름"
          className="name"
          value={name}
          onChange={onChangeName}
        />
        <input
          type="text"
          placeholder="성별"
          className="sex"
          value={sex}
          onChange={onChangeSex}
        />
        <input
          type="text"
          placeholder="나이"
          className="age"
          value={age}
          onChange={onChangeAge}
        />
        <input
          type="text"
          placeholder="부서"
          className="department"
          value={department}
          onChange={onChangeDepartment}
        />
        <input
          type="text"
          placeholder="이메일 주소"
          className="email-address"
          value={email}
          onChange={onChangeEmail}
        />
        <button type="submit" className="registerBtn">
          등록
        </button>
      </form>
    </div>
  );
};

export default Register;
