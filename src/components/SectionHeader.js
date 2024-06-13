import React from 'react'
import { blueHeader } from "../styles/newsletters.css"
let slugify = require('slugify')


const SectionHeader = ({ title }) => {
    const slug = slugify(title, {lower: true})

    return (
        <div className={blueHeader} id={ slug }>
            {title}
        </div>
    )
}

export default SectionHeader