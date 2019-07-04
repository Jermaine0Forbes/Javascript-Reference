import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {getGrade} from "../actions";

function mapStateToProps (state){
  return {
    students: state.students
  }
}

const  mapDispatchToProps = {
  getGrade
}

// const GradeSelect = () =>{
//   return (
//     <div>
//
//     </div>
//   )
// }

const StudentBlock = (props) => {
  let block;

  if(props.data.length > 1){
    block = props.data.map(function(el){
     return  (<div className="mb-5" key={el.id}>
      <p>{el.name}</p>
      <p>{el.grade}</p>
       </div>);
    })
  }else{
    block = <div>Student</div>
  }
  return block;
}

 class Student extends Component{

   checkGrade = (e) =>{
     e.preventDefault();
     let select = document.getElementById("grade-select").value;
     // console.log(select);
     this.props.getGrade(select);

   }
  render(){
    return(

      <div>

        <form onSubmit={this.checkGrade}>
          <div className="form-group" >
            <select id="grade-select">
              <option value="9th"> 9th</option>
              <option value="10th"> 10th</option>
              <option value="11th"> 11th</option>
              <option value="12th"> 12th</option>
            </select>
          </div>
          <div className="form-group">
            <input type="submit"  className="btn btn-primary"/>
          </div>

        </form>
        <StudentBlock data={this.props.students} key="stb"/>
      </div>
    )


  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Student);
