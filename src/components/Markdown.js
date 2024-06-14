import React from 'react'
import ReactMarkdown from 'react-markdown'
import SectionHeader from './SectionHeader'
import { StaticImage } from 'gatsby-plugin-image'

export const Markdown = ({ src }) => {
    // const componentMap = useMemo(() => ({
    //     h1: function SectionHeader({ name }) {
    //       return <SectionHeader title={ name }/>
    //     },
    //   }), [])
  
    return (
        <ReactMarkdown
            children={ src }
            components={{
                h1: ({ node, children, ...props }) => <SectionHeader title={ children }/>
            }}
        />
    )
}
