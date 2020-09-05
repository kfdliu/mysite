import React from 'react'

import IndexMainContent from './index/IndexMainContent'
import ProjectsMainContent from './projects/ProjectsMainContent'
import ContactMainContent from './contact/ContactMainContent'

function MainContent (props) {
    if (props.page === "index") {
        return (
            <IndexMainContent />
        )
    } else if (props.page === "projects") {
        return (
            <ProjectsMainContent />
        )
    } else {
        return (
            <ContactMainContent />
        )
    }
        
}

export default MainContent
