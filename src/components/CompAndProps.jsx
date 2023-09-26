import React, { Component } from "react";
import "../App.css";

function Square(props) {
  return (
    <div>
      <h4>{props.komponen_nama}</h4>
      <p>{props.komponen_nim}</p>
      <p>{props.komponen_email}</p>
    </div>
  );
}

export default class CompAndProps extends Component {
  render() {
    const bgColor = {
      backgroundColor: this.props.bgColor,
    };

    const bgbgColor = {
      backgroundColor: this.props.bgbgColor,
    };

    return (
      <div className="wrapper">
        <div className="User-info-pink" style={bgColor}>
          <Square
            komponen_nama="Afrizal Eka Purnama"
            komponen_nim="21120120140165"
            komponen_email="afrizalekapurnama@students.undip.ac.id"
          />
        </div>
        <div className="User-info-purple" style={bgbgColor}>
          <Square
            komponen_nama="Ega Fawwaz Khansa"
            komponen_nim="21120120130133"
            komponen_email="egafawwazkhansa@students.undip.ac.id"
          />
        </div>
        <div className="User-info-pink" style={bgColor}>
          <Square
            komponen_nama="Muhammad Juha Arsyadani Arif"
            komponen_nim="21120120140146"
            komponen_email="arsyadani@students.undip.ac.id"
          />
        </div>
        <div className="User-info-purple" style={bgbgColor}>
          <Square
            komponen_nama="Krishna Falmaasa Mudya"
            komponen_nim="21120120130070"
            komponen_email="krishnafm001@students.undip.ac.id"
          />
        </div>
      </div>
    );
  }
}
