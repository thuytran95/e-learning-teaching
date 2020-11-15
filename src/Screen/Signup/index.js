import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUpUserSchema } from "../../Service/user";
import { userService } from "../../Service";

// schema do minh tao ra de validation du lieu thu duoc tu form

class SignupScreen extends Component {
  // tạo hanfm trong onSubmit
  _handleSubmit = (values) => {
    // console.log(values);
    // tach axios ra file riêng trong service
    userService
      .signUp(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <h1 className="display-4 text-center">Sign Up</h1>
        <Formik
          // phai co gia tri ban dau -> muonn khoỉ chon ô select thì mặc định nó là GP01
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "GP01",
            email: "",
          }}
          validationSchema={signUpUserSchema}
          // ham thu 2 can phai co: truoc khi chay hafm handelsubmit thi formik se xet xem schema validate da dung chua
          // neu hop le c
          onSubmit={this._handleSubmit}
        >
          {(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Tài khoản: </label>
                <Field
                  type="text"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                  className="form-control"
                  placeholder
                />
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className="alert bg-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mât khẩu: </label>
                <Field
                  type="password"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                  className="form-control"
                  placeholder
                />
                <ErrorMessage name="matKhau" />
              </div>
              <div className="form-group">
                <label>Họ tên: </label>
                <Field
                  type="text"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                  className="form-control"
                  placeholder
                />
                <ErrorMessage name="hoTen" />
              </div>
              <div className="form-group">
                <label>Email: </label>
                <Field
                  type="email"
                  name="email"
                  onChange={formikProps.handleChange}
                  className="form-control"
                  placeholder
                />
                <ErrorMessage name="email" />
              </div>
              <div className="form-group">
                <label>Số điện thoại: </label>
                <Field
                  type="text"
                  name="soDT"
                  onChange={formikProps.handleChange}
                  className="form-control"
                  placeholder
                />
                <ErrorMessage name="soDT" />
              </div>
              <div className="form-group">
                <label>Mã nhóm: </label>
                <Field
                  as="select"
                  className="form-control"
                  name="maNhom"
                  onChange={formikProps.handleChange}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
                <ErrorMessage name="maNhom" />
              </div>
              <div className="text-center">
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default SignupScreen;
