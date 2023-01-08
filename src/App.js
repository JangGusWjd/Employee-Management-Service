import { useState, useRef, useCallback } from "react";
import "./App.css";
import Register from "./components/Register";
import StaffCollection from "./components/StaffCollection";

function App() {
  const [staffInfo, setStaffInfo] = useState([
    {
      id: 1,
      name: "사원1",
      sex: "여자",
      age: 24,
      department: "프론트엔드 개발부",
      email: "aaaa@gmail.com",
    },
    {
      id: 2,
      name: "사원2",
      sex: "여자",
      age: 27,
      department: "기획부",
      email: "bbbb@gmail.com",
    },
    {
      id: 3,
      name: "사원3",
      sex: "남자",
      age: 30,
      department: "시스템 사업부",
      email: "1234@naver.com",
    },
    {
      id: 4,
      name: "사원4",
      sex: "남자",
      age: 26,
      department: "백엔드 개발부",
      email: "a1a1@naver.com",
    },
  ]);

  const nextId = useRef(2);

  const onInsert = useCallback(
    (name, sex, age, department, email) => {
      const info = {
        id: nextId.current,
        name,
        sex,
        age,
        department,
        email,
      };
      setStaffInfo(staffInfo.concat(info));
      nextId.current += 1;
    },
    [staffInfo]
  );

  return (
    <div className="Container">
      <Register onInsert={onInsert} />
      <div className="staff-zip">
        <StaffCollection staffInfo={staffInfo} />
      </div>
    </div>
  );
}

export default App;
