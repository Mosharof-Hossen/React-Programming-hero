import React from "react"

function Person (props){
    let person = {
      name : "Mosharof Hossen",
      profession : "student"
    }
    const personStyle ={
      color : "black",
      border : "2px solid black",
      margin : "20px"
    }
    const nameStyle = {
      color : "red"
    }
    return (
      <div style = {personStyle}>
        <h1 >Name is <span style = {nameStyle}>{props.name}</span></h1>
        <h3>Profession is <span style = {nameStyle}>{props.profession}</span></h3>
      </div>
    )
  }

export default Person;