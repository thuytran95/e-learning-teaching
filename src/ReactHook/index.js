import React, { useState, useEffect } from "react";

const DemoHook = () => {
  const [count, setCount] = useState(0);
  const [isAgree, setIsAgree] = useState(false);

  const increaseCount = () => {
    if (isAgree) {
      setCount(count + 1);
    }
  };

  const agreeToChangeCount = () => {
    setIsAgree(true);
  };

  useEffect(() => {
    console.log(
      "useEFfect just run 1 time first, su dung chay 1 lan duy nhat, chayj laan dau"
    );
  }, []);

  useEffect(() => {
    console.log("useEffect run");
  });

  //   useEffect chi chay khi bien isagree thay doi, neu bien nay khong thay doi thif n o khong chya
  useEffect(() => {
    console.log("useEffect just run when isAgree change"); //kiem tra token, token thay doi ms tien hanh fetch data
  }, [isAgree]);

  //   suử dụng để kiểm tra token khi đăng nhâp
  //   useEffect(() => {
  //     if (token) { //co the su dung location -> yeu cau user phair active location cua no len thi minh ms fetch data cua no len
  //       fetchData();
  //     }
  //   }, [token]);
  return (
    <div>
      <h1>Demo hook</h1>
      <button className="btn btn-success" onClick={increaseCount}>
        Increase count
      </button>
      <button className="btn btn-success mx-5" onClick={agreeToChangeCount}>
        Agree change count
      </button>
      <h1 className="display-4">Count: {count}</h1>
    </div>
  );
};

export default DemoHook;
