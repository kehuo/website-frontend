import React from "react";
import ReactDOM from "react-dom";
// import {Spin} from "antd";


export default class Jupyter extends React.Component {
    constructor() {
      super();
      this.state = {
        iFrameHeight: '0px',
        baseIframePath: "http://kevinhuo.cool/nbviewer/localfile/",
        // isSpinning: true
      }
    }

    render() {
      const src = this.state.baseIframePath + this.props.filePath;
      return (
        // <Spin tip="Loading..." spinning={this.state.isSpinning}>
          <iframe 
              style={{width:'100%', height:this.state.iFrameHeight, overflow:'visible'}}
              onLoad={() => {
                  const obj = ReactDOM.findDOMNode(this);
                  this.setState({
                      "iFrameHeight":  obj.contentWindow.document.body.scrollHeight + 'px'
                  });
              }} 
              src={src}
              width="100%" 
              height={this.state.iFrameHeight} 
              scrolling="no" 
              frameBorder="0"
          >
          </iframe>
        // </Spin>
      );
    }
  }

export const MDXJupyter = (params)=>{
  return(
    <Jupyter filePath={params.filePath}/>
  )
}



