import styled from "styled-components";

import {
    FaFacebookSquare,
    FaLinkedin,
    FaGithubSquare,
    FaWhatsappSquare
} from "react-icons/fa";
import {
    MdEmail
} from "react-icons/md";

export const AiOutlineLinkedinIcon = styled(FaLinkedin)`
    color: #fff;
    font-size: 1.8em;
    cursor: pointer;
`;
export const AiOutlineWhatsAppIcon = styled(FaWhatsappSquare)`
    color: #fff;
    font-size: 1.8em;
    cursor: pointer;
`;
export const AiOutlineGithubIcon = styled(FaGithubSquare)`
    color: #fff;
    font-size: 1.8em;
    cursor: pointer;
`;
export const AiOutlineMailIcon = styled(MdEmail)`
    color: #fff;
    font-size: 1.8em;
    cursor: pointer;
`;
export const AiOutlineFacebookIcon = styled(FaFacebookSquare)`
    color: #fff;
    font-size: 1.8em;
    cursor: pointer;
`;





export const Container = styled.div`
  height: 70px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const SocialContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`;
export const Author = styled.div`
  color: #666;
  width: 100%;
  padding: 3px 0;
  font-size: 1em;
  a {
    color: #666;
    
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (min-width: 360px) AND (max-width: 428px) {
      justify-content: center;
      font-size: 1em;
      margin-bottom: 10px;
    }
  }
`;
