import "./Staff.css";
import { useState } from "react";
import cn from "classnames";

const Staff = ({ staffInfo }) => {
  const { name, department, email } = staffInfo;

  const [inClick, setInClick] = useState(false);
  const [outClick, setOutClick] = useState(false);
  const [offClick, setOffClick] = useState(false);

  return (
    <div
      id="staff-container"
      className={cn({
        inBtnClick: inClick,
        outBtnClick: outClick,
        offBtnClick: offClick,
      })}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/74/74472.png"
        alt="회원사진"
      />
      <div className="staff-info">
        <span>이름: {name}</span>
        <span>부서: {department}</span>
        <span>이메일: {email}</span>
      </div>
      <div className="button-zip">
        <button
          className="inBtn"
          value="blue"
          onClick={() => setInClick((inClick) => !inClick)}
        >
          출근
        </button>
        <button
          className="outBtn"
          value="red"
          onClick={() => setOutClick((outClick) => !outClick)}
        >
          퇴근
        </button>
        <button
          className="offBtn"
          value="grey"
          onClick={() => setOffClick((offClick) => !offClick)}
        >
          퇴사
        </button>
      </div>
    </div>
  );
};

export default Staff;
