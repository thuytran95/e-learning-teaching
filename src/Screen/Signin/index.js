import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

class SignInScreen extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {/* bocs tách handelchange trong formikProps -> thông thường onChange = {formikProps.handelChange} */}
        {({ handleChange }) => (
          <Form className="w-50 mx-auto">
            <h1>Đăng nhập</h1>
            <div className="form-group">
              <lable>Tài khoản</lable>
              <Field
                type="text"
                name="taiKhoan"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <lable>Mật khẩu</lable>
              <Field
                type="password"
                name="matKhau"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button className="btn btn-success">Đăng nhập</button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default SignInScreen;
