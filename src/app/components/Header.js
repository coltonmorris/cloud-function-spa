import React from "react"
import Link from "next/link"
import _ from "lodash"

import stylesheet from '../static/font-awesome/web-fonts-with-css/css/fontawesome.css'
import fontawesome from '../static/font-awesome/svg-with-js/js/fontawesome-all'

let style = {
}

export default ({ pathname }) => (
  <header>
    <style dangerouslySetInnerHTML={{ __html: fontawesome }} />
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

    <Link href="/">
      <a className={pathname === "/" ? "is-active" : ""}>Home</a>
    </Link>{" "}
    <Link href="/about">
      <a className={pathname === "/about" ? "is-active" : ""}>About</a>
    </Link>
    <a style={_.assign({}, style, {"color":"#000"})} className="fa-stack fa-1x" data-toggle="tooltip" title="Github" data-placement="top" href="https://github.com/coltonmorris">
      <i className="fab fa-github-square fa-stack-2x"></i>
    </a>
  </header>
)
