import React from 'react'
import './footer.scss'
import { GithubLogo, InstagramLogo, LinkedinLogo, TelegramLogo } from "@phosphor-icons/react"
import AppModalFeedback from "../../app.ui/app.modal.feedback/AppModalFeedback"
import { useDisclosure } from "@mantine/hooks"
import { useToast } from "@chakra-ui/react"
import AppModalAbout from "../../app.ui/app.modal.about/app.modal.about"
import AppModalReport from "../../app.ui/app.modal.report/app.modal.report"



const AppFooter = () => {

    const [ openedFeedback, { open: openFeedback, close: closeFeedback } ] = useDisclosure(false)
    const [ openedAbout, { open: openAbout, close: closeAbout } ] = useDisclosure(false)
    const [ openedReport, { open: openReport, close: closeReport } ] = useDisclosure(false)
    const toast = useToast()


    const toastHandler = (title, status, desc) => {
        toast({
                  title: title,
                  status: status,
                  description: desc,
                  duration: 3000,
                  variant: 'left-accent',
                  position: 'bottom-right',
                  isClosable: true,
              })
    }


    return (
        <footer>
            <div className="container">
                <div className="reports">
                    <p onClick={() => openReport()}>report a problem</p>

                    <p onClick={() => openAbout()}>about us</p>
                    <p onClick={() => openFeedback()}>contact us</p>
                </div>
                <div className="socials">
                    <a href="https://www.instagram.com/orest_sonich/" target="_blank"><InstagramLogo size={45}/></a>
                    <a href="https://github.com/OrestSonich" target="_blank"><GithubLogo size={45}/></a>
                    <a href="https://www.linkedin.com/in/orest-sonich-80463b26b/" target="_blank"><LinkedinLogo
                        size={45}/></a>
                    <a href="https://t.me/sonichorest" target="_blank"><TelegramLogo size={45}/></a>
                </div>
                <p className="copyright">fresheng pet project || Developed By: Orest Sonich</p>
            </div>
            <AppModalReport opened={openedReport} close={closeReport} callback={() =>
                toastHandler('Thanks for report problem!',
                             'success',
                             'I appreciate all your feedback!')}/>
            <AppModalAbout opened={openedAbout} close={closeAbout}/>
            <AppModalFeedback opened={openedFeedback} callback={() =>
                toastHandler('Thanks for feedback!',
                             'success',
                             'I appreciate all your feedback!')}
                              close={closeFeedback}/>
        </footer>
    )
}

export default AppFooter