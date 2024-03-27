import styled from 'styled-components';

function Footer () {

const FooterContainer = styled.footer`
  background-color: #495E57;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  @media (max-width: 768px){
    gap: 20px;
  }
`;

const LogoContainer = styled.div`
  width: 150px;
  padding: 16px;
  background-color: white;
  border-radius: 16px;
  text-align: center;
`;

const Logo = styled.img`
  object-fit: cover;
`;

const Section = styled.section`
  width: 200px;
  margin-bottom: 20px;
  text-align: center;
`;

const SectionHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: 768px){
    font-size: 14px;
  }
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`;

const NavigationItem = styled.li`
  margin: 0 5px;
  @media (max-width: 768px){
    font-size: 13px;
  }
`;

const NavigationLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px){
    font-size: 13px;
  }
`;

// Usage example
  return (
    <>
    <FooterContainer>
      {/* <Section>
        <SectionHeading>Media Links</SectionHeading>
        
      </Section> */}

      <Section>
        <SectionHeading>Contact Us</SectionHeading>
        <NavigationList>
          <NavigationItem>
            123-456-789
          </NavigationItem>
          <NavigationItem>
            little_lemon@gmail.com
          </NavigationItem>
        </NavigationList>
      </Section>

      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <LogoContainer>
        <Logo src="/Images/Logo.svg" alt="Little Lemon"/>
      </LogoContainer>
      <div style={{display: 'flex', listStyle: 'none', marginTop: '10px'}}>
          <NavigationItem>
            <NavigationLink href="http://www.instagram.com">Instagram</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href="http://www.facebook.com">Facebook</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href="http://www.x.com">X</NavigationLink>
          </NavigationItem>
        </div>
        </div>

      <Section>
        <SectionHeading>Navigation</SectionHeading>
        <NavigationList>
          <NavigationItem>
            <NavigationLink href="/home">Home</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href="/about">About</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href="/menu">Menu</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href="/order">Order</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href="/reserve">Reserve</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </Section>
    </FooterContainer>
    <div style={{textAlign: 'center', fontSize: "10px", padding: '10px 0', color: 'white', backgroundColor: '#333'}}>
        2024 all rights reserved  |  Designed & developed by KedarGavali
      </div>
    </>
  );
};

export default Footer 