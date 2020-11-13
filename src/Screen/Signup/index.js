import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

class SignupScreen extends Component {
  // tạo hanfm trong onSubmit
  _handleSubmit = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <h1 className="display-4 text-center">Sign Up</h1>
        <Formik
          // phai co gia tri ban dau
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "",
            email: "",
          }}
          // ham thu 2 can phai co
          onSubmit={this._handleSubmit}
          // render nhan vao mot formikprops
          render={(formikProps) => {
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
              </div>
              {/* <div className="form-group">
                <label>Mã nhóm: </label>
                <Field
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
              </div> */}
              <div className="text-center">
                <button className="btn btn-success">Submit</button>
              </div>
            </Form>;
          }}
        />
      </div>
    );
  }
}

export default SignupScreen;
