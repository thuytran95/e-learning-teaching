import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { login } from "../../Redux/Action/user";

class SignInScreen extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        // sau khi signin xong thi phai luu du lieu tren store va local storage
        // de khi nguoi dung thoat trinh duyet khi vao lai thi van o trang thai login khong can dang nhap lai
        onSubmit={(values) => {
          console.log(values);
          this.props.dispatch(login(values));
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
            <button type="submit" className="btn btn-success">
              Đăng nhập
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default connect()(SignInScreen);
