import * as C from "./styles";



const Social = () => {
  return (
    <C.Container>
      <C.SocialContent>
        <a
          href="https://wa.me/5521966077757?text=Hi%2C+How+are+you%3F"
          target="_blank"
          rel="noreferrer"
        >
          <C.AiOutlineWhatsAppIcon/>
        </a>
        <a
          href="https://www.facebook.com/patrick.anjos.r/"
          target="_blank"
          rel="noreferrer"
        >
          <C.AiOutlineFacebookIcon/>
        </a>
        <a
          href="https://www.linkedin.com/in/patrick-anjos-8b65021b7/"
          target="_blank"
          rel="noreferrer"
        >
          <C.AiOutlineLinkedinIcon/>
        </a>
        <a href="https://github.com/setxpro" target="_blank" rel="noreferrer">
          <C.AiOutlineGithubIcon/>
        </a>
        <a
          href="mailto:patrickpqdt87289@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <C.AiOutlineMailIcon/>
        </a>
      </C.SocialContent>
      <C.Author>
       {" "}
        <a href="https://wa.me/5521966077757?text=Hi%2C+How+are+you%3F">
        © ZEND TEAM
        </a>
      </C.Author>
    </C.Container>
  );
};

export default Social;
