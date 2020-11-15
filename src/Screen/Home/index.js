import React, { Component } from "react";
import CourseItem from "../../Components/CourseItem";
import Axios from "axios";
import { connect } from "react-redux";
import { courseService } from "../../Service";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Danh sách khóa học</h1>
        <div class="container">
          <div class="row">
            {this.props.courseList.map((courseItem, index) => (
              <div className="col-3">
                <CourseItem key={index} courseItem={courseItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  //   chay sau render, chay dung 1 lan duy nhat
  componentDidMount() {
    courseService
      .fetchCourse()
      .then((res) => {
        console.log(res.data);
        this.props.dispatch({
          type: "FETCH_COURSES",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapStateToProps = (state) => {
  return { courseList: state.course.course };
};

export default connect(mapStateToProps)(HomeScreen);
