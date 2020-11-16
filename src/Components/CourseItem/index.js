import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CourseItem extends Component {
  // truyen tham so thong qua param
  render() {
    return (
      <div className="card mb-4">
        <img
          src={this.props.courseItem.hinhAnh}
          style={{ width: "100%", height: "200px" }}
        />
        <p className="lead font-weight-bold p-2">
          {this.props.courseItem.tenKhoaHoc}
        </p>
        <p className="lead">
          Instructor: {this.props.courseItem.nguoiTao.hoTen}
        </p>
        <p class="lead"> Rating: 5.0</p>
        <Link
          to={`/detail/${this.props.courseItem.maKhoaHoc}`}
          className="btn btn-success"
        >
          Go to detail
        </Link>
      </div>
    );
  }
}
