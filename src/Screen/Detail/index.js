import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { courseService } from "../../Service";
import { createAction } from "../../Redux/Action";

class DetailScreen extends Component {
  render() {
    return (
      <div>
        <img src={this.props.courseDetail.hinhAnh} />
        <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
      </div>
    );
  }

  componentDidMount() {
    courseService
      .fetchCourseDetail()
      .then((res) => {
        // console.log(res);
        this.props.dispatch(createAction("FETCH_COURSE_DETAIL", res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapStateToProps = (state) => {
  return {
    // do ban đầu courseDetail trên state bằng null nếu ko set object ban đầu thì nó bão lõi ko thể null.hinhAnh
    courseDetail: state.course.courseDetail || {
      maKhoaHoc: "",
      tenKhoaHoc: "",
      hinhAnh: "",
      nguoiTao: { taiKhoan: "", hoTen: "" },
    },
  };
};

export default connect(mapStateToProps)(DetailScreen);
