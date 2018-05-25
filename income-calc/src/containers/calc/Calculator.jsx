/* eslint-disable react/prefer-stateless-function */
import React from "react";
import MaskedInput from "react-text-mask";
import NumberFormat from "react-number-format";
import { FormControl, TextField, InputLabel, Input } from "@material-ui/core";
import TestButton from "../../components/testButton";
import "./Calculator.css";
import { Store } from "../../app/store";
import SliderUp from "../../components/SliderUp";


function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

function WorkedHoursFormatter(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
    />
  );
}

class FormattedInputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hourlyPay: "0",
      workHoursPerWeek: "0",
      weeksPerYear: 52,
      finalAns: 0,
      contextState:{
        checked: false,
        answer:this.finalAns,
        handleCloseAns:this.handleCloseAns,
        doTheMath:this.doTheMath
      }
    };
  }


  handleCloseAns = () => {
    this.setState({ 
      contextState:{
      checked: false
      }
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  doTheMath = () => {
    if (this.state.hourlyPay > 0 && this.state.workHoursPerWeek > 0) {
      const { workHoursPerWeek, hourlyPay, weeksPerYear } = this.state;
      const tempAns= workHoursPerWeek * hourlyPay * weeksPerYear;
      console.log(tempAns)
      this.setState({
        finalAns: tempAns,
        contextState:{ 
          checked: true
        }
      });
    } else {
      console.log("Error");
    }
  };

  render() {
    const { classes } = this.props;
    const { workHoursPerWeek, hourlyPay } = this.state;

    return (
      <div className="container">
        <TextField
          // className={classes.formControl}
          label="Hourly Wage"
          value={hourlyPay}
          onChange={this.handleChange("hourlyPay")}
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumberFormatCustom
          }}
        />
        <TextField
          // className={classes.formControl}
          label="Hours per week? "
          value={workHoursPerWeek}
          onChange={this.handleChange("workHoursPerWeek")}
          id="workedHours-input"
          InputProps={{
            inputComponent: WorkedHoursFormatter
          }}
        />
        <p>
          Multiply the number of hours you work per week by your hourly wage.
          Multiply that number by 52
        </p>

        <Store.Provider value={this.state.contextState}>
          <TestButton />
          <SliderUp />
        </Store.Provider>
      </div>
    );
  }
}

export default FormattedInputs;
