import React from "react"
import { toc } from "../styles/newsletters.module.css"
let slugify = require('slugify')


const TableOfContents = ({ headers }) => {
    return (
        <div className={toc}>
            {
                headers.map(header => {
                    const slug = slugify(header, {lower: true})
                    return (
                        <div>
                             <a href={ `#${ slug }` }>{ header }</a>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default TableOfContents