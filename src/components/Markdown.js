import React from 'react'
import ReactMarkdown from 'react-markdown'
import SectionHeader from './SectionHeader'

export const Markdown = ({ src, title }) => {
    // const componentMap = useMemo(() => ({
    //     h1: function SectionHeader({ title }) {
    //       return <SectionHeader title={title}/>
    //     },
    //   }), [])
  
    return (
        <ReactMarkdown
            children={ src }
            components={{
                h1: () => <SectionHeader title={title}/>
            }}
        />
    )
}
