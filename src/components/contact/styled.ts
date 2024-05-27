import styled, { css } from 'styled-components';  //ok

import LinkedInIconMUI from '@mui/icons-material/LinkedIn';
import GitHubIconMUI from '@mui/icons-material/GitHub';
import WhatsAppIconMUI from '@mui/icons-material/WhatsApp';


export const CardContact = styled.div`
padding: 40px;
margin-top: 50px;
backdrop-filter: blur(80px);
display: flex;
align-items: center;
justify-content:space-evenly;
`;

export const Link = styled(LinkedInIconMUI)`
  font-size: 50px;
`;

export const GitHub = styled(GitHubIconMUI)`
   font-size: 50px;
`;

export const Whats = styled(WhatsAppIconMUI)`
   font-size: 50px;
`;