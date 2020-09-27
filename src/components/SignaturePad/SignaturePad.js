import React from "react";
import ReactDOM from "react-dom";
import {Row, Col, Input, Button} from "antd";
import SignatureCanvas from 'react-signature-canvas';
import styles from "./styles.module.css";
import "antd/dist/antd.css";


export default class SignaturePad extends React.Component {
    // oficial doc: https://github.com/agilgur5/react-signature-canvas
    constructor() {
      super();
      this.state = {
        result_number: -1,
        probibility: 0,

        sig_canvas: {clear:()=>{},toDataURL:(param)=>{return ""}},
        trimmedDataURL: ""
      }
      this.clear = this.clear.bind(this);
      this.trim = this.trim.bind(this);
    }


    clear(){
      console.log("trigeering clear func");
      this.state.sig_canvas.clear()
      this.setState({result_number: -1, probibility: 0})
    }

    trim(){
      console.log("trigeering trim func");
      //console.log(this.state.sig_canvas);
      //let trimmedCanvas = this.sigCanvas.getTrimmedCanvas();
      this.setState({trimmedDataURL: this.state.sig_canvas.toDataURL('image/png')});
      this.setState({result_number: 1000000, probibility: 0.0001});
      console.log("trim OK, url is: " + this.state.trimmedDataURL);
  }

    displayResultNumber(){
      if(this.state.result_number > 0){
        return("Result: " + this.state.result_number)
      };
      return(null);
    }

    displayProbability(){
      if(this.state.probibility > 0){
        return("Probability: " + this.state.probibility)
      };
      return(null);
    }

    render() {
      var displayed_number = this.displayResultNumber();
      var displayed_prob = this.displayProbability();
      return (
          <div className={styles.main}>
            <div className={styles.canvas_container}>
              <SignatureCanvas 
              penColor='black' 
              canvasProps={{className: styles.sig_canvas}}
              ref={(ref) => { this.state.sig_canvas = ref }}
              />
            </div>

            <div className={styles.button_container}>
              <Button type="primary" onClick={this.clear}>Clear</Button>
              <Input type="text" value={displayed_number}></Input>
              <Input type="text" value={displayed_prob}></Input>
              <Button type="default" onClick={this.trim}>Run</Button>
            </div>
            
          </div>
      );
    }
  }

export const MDXSignaturePad = (params)=>{
  return(
    <SignaturePad />
  )
}



