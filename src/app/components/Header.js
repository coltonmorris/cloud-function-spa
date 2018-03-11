import React from "react"
import Link from "next/link"

import stylesheet from '../static/font-awesome/web-fonts-with-css/css/fontawesome.css'
import fontawesome from '../static/font-awesome/svg-with-js/js/fontawesome-all'

export default ({ pathname }) => (
  <header>
    <style dangerouslySetInnerHTML={{ __html: fontawesome }} />
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div style={{"height":"20px","background":"purple"}}></div>
    <div style={{"height":"84px", "background":"#d3d3d3"}}>
      <div style={{"display":"table", "margin":"0 auto"}}>
        <ul style={{"min-width": "696px", "list-style": "none", "padding-top": "20px", "display":"inline"}}>
          <li style={{"padding":"30px","display":"inline"}}>
            <Link style={{}} href="/">
              <a style={{"text-decoration":"none"}} className={pathname === "/" ? "is-active" : ""}>Home</a>
            </Link>{" "}
          </li>
          <li style={{"padding":"30px","display":"inline"}}>
            <Link style={{}} href="/about">
              <a style={{"text-decoration":"none"}} className={pathname === "/about" ? "is-active" : ""}>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)
