import React from "react"
import App from "../components/App"
import * as _ from 'lodash'
var FontAwesome = require('react-fontawesome');


export default () => {
  let style = {
    "margin":"20px",
    "text-decoration":"none",
  }

  return (
    <App>
      <p>I am Colton Morris, a software developer at TCN, inc.</p>

      <div>
        <a style={_.assign({}, style, {"color":"#000"})} className="fa-stack fa-1x" data-toggle="tooltip" title="Github" data-placement="top" href="https://github.com/coltonmorris">
          <i className="fab fa-github-square fa-stack-2x"></i>
        </a>
        <a style={_.assign({}, style, {"color":"#1da1f2"})} className="fa-stack fa-1x" data-toggle="tooltip" title="Share on Twitter" data-placement="top" href="https://twitter.com/King_Coolton">
          <i className="fab fa-twitter-square fa-stack-2x"></i>
        </a>
        <a style={_.assign({}, style, {"color":"#007bb5"})} className="fa-stack fa-1x" data-toggle="tooltip" title="Share by Link" data-placement="top" href="https://www.linkedin.com/in/coltonmorris">
          <i className="fa fa-square fa-stack-2x"></i>
          <i style={{"paddingLeft":"8px","color":"#fff"}} className="fab fa-3x fa-linkedin-in fa-stack-1x"></i>
        </a>
      </div>
    </App>
  )
}
