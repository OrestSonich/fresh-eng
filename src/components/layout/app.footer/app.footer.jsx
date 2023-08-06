import React from 'react'
import './footer.scss'
import { GithubLogo, InstagramLogo, LinkedinLogo, TelegramLogo } from "@phosphor-icons/react"
import AppModalFeedback from "../../app.ui/app.modal.feedback/AppModalFeedback"
import { useDisclosure } from "@mantine/hooks"
import { ChakraProvider, useToast } from "@chakra-ui/react"



const AppFooter = () => {

    const [ openedFeedback, { open, close } ] = useDisclosure(false)
    const toast = useToast()



    const toastHandler = () => {
        toast({
                  title: 'Thanks for feedback!',
                  status: 'success',
                  description: 'I appreciate all your feedback!',
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
                    <p onClick={() => console.log()}>report a problem</p>

                    <p>about us</p>
                    <p onClick={() => open()}>contact us</p>
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
            <ChakraProvider>
                <AppModalFeedback opened={openedFeedback} callback={toastHandler} close={close}></AppModalFeedback>
            </ChakraProvider>
        </footer>
    )
}

export default AppFooter