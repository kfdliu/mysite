import React from 'react'

import IndexMainContent from './index/IndexMainContent'
import ProjectsMainContent from './projects/ProjectsMainContent'
import ContactMainContent from './contact/ContactMainContent'
import ResumeMainContent from './resume/ResumeMainContent'

function MainContent (props) {
    if (props.page === "index") {
        return (
            <IndexMainContent />
        )
    } else if (props.page === "projects") {
        return (
            <ProjectsMainContent />
        )
    } else if (props.page === "contact") {
        return (
            <ContactMainContent />
        )
    } else {
        return (
            <ResumeMainContent />
        )
    }
        
}

export default MainContent