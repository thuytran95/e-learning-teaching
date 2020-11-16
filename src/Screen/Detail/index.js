import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetailCourse } from "../../Redux/Action/course";

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
    console.log(this.props.match.params.courseId);
    this.props.dispatch(fetchDetailCourse(this.props.match.params.courseId));
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
