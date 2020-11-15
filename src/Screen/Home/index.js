import React, { Component } from "react";
import CourseItem from "../../Components/CourseItem";
import Axios from "axios";
import { connect } from "react-redux";
import { fetchCourse } from "../../Redux/Action/user.action";

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
  /* coong dung: mo con duong dispatch lên trên store đồng thời kích hoạt hàm fetchCourse 
  -> call API từ server, server trả về dữ liệu thì tiêp tục đưa dữ liệu lên cho store
  Không có gì chắc chăn rằng lên trên store rồi có dữ liệu trả về hay chưa -> bất đồng bộ, thời gian trả về ko dự đoán đk
  Cần sử dụng middleware: lớp chắn ngang giữa component vs store, bất kỳ action nào đi lên store đều phải đi qua middleware
  */
  componentDidMount() {
    this.props.dispatch(fetchCourse());
  }
}

const mapStateToProps = (state) => {
  return { courseList: state.course.course };
};

export default connect(mapStateToProps)(HomeScreen);
