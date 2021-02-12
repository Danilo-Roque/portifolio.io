
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react'
import {Component} from 'react'

class App extends Component { 
        render() { 
          return (
            <div className="Pessoal">
          <h1 className="Nome">Danilo Roque</h1>  
          <h2>Desenvolvedor e Investidor</h2>
          <InstagramIcon color="primary" fontSize="large"/>
          <EmailIcon color="primary" fontSize="large"/>
          <PictureAsPdfIcon color="primary" fontSize="large" />
          <LinkedInIcon  color="primary" fontSize="large"/>
          <GitHubIcon color="primary" fontSize="large"/>
          <YouTubeIcon  color="primary" fontSize="large"/>
          <br />
          <Button variant="contained" color="primary">  Sobre </Button>
          <Button variant="contained" color="primary">  Projetos </Button>
          <Button variant="contained" color="primary">  Experiências </Button>
          
        </div>
          )
        }
      }
      
      export default App




        

    
