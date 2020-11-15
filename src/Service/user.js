import Axios from "axios";
import * as yup from "yup";
export const signUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("*Field is required"),
  matKhau: yup.string().required("*Field is required"),
  hoTen: yup.string().required("*Field is required"),
  email: yup.string().required("*Field is required").email("*Email is invalid"),
  soDT: yup
    .string()
    .required("*Field is required")
    .matches(/^[0-9]+$/), //viet bieu thuc chinh quy phai viet lien, khong co dau cach giua cac ky tu
  maNhom: yup.string().required("*Field is required"),
});

class UserService {
  signUp(data) {
    return Axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data,
    });
  }
}

export default UserService;
