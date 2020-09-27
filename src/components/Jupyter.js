import React from "react";
import ReactDOM from "react-dom";

export default class Jupyter extends React.Component {
    constructor() {
      super();
      this.state = {
        iFrameHeight: '0px',
        baseIframePath: "http://localhost/nbviewer/localfile/"
      }
    }

    render() {
      // src 的端口必须指定 nginx 的端口 888，才可以避免跨域问题.
      const src = this.state.baseIframePath + this.props.filePath;
      return (
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
      );
    }
  }

export const MDXJupyter = (params)=>{
  return(
    <Jupyter filePath={params.filePath}/>
  )
}



