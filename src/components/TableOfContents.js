import React from "react"
import { toc } from "../styles/newsletters.css"
let slugify = require('slugify')


const TableOfContents = ({ headers }) => {
    return (
        <div className={toc}>
            {
                headers.map(header => {
                    const slug = slugify(header, {lower: true})
                    return (
                        <a href={ `#${ slug }` }>{ header }</a>
                    )
                })
            }
        </div>
    )
}


export default TableOfContents