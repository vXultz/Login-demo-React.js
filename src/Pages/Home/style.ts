import styled from 'styled-components';
import {Facebook} from '@styled-icons/boxicons-logos/Facebook'
import {Twitter} from '@styled-icons/boxicons-logos/Twitter'
import {GooglePlus} from '@styled-icons/boxicons-logos/GooglePlus'
import {MapMarkerAlt} from '@styled-icons/fa-solid/MapMarkerAlt'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #3f2892;
`;

export const ContainerIcon = styled.div`
  display: flex;
  width: 100;
  position: absolute;
  z-index: 2;
  padding: 60px;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 2.5rem;
    color: white;
    margin-top: 1rem;
  }
`;


export const IconMapMarkerAlt = styled(MapMarkerAlt)`
  width: 5rem;
  height: 5rem;
  color: white;
`;

export const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  opacity: 0.3;
`;

export const BoxWhite = styled.div`
  position: fixed;
  bottom: 0;
  background: white;
  height: 30rem;
  width: 85%;
  border-radius: 50px 50px 0px 0px;
  padding: 2rem;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Text = styled.p`
color: #6652ac;
font-size: 2rem;
`;

export const TextInside = styled.p`
color: #c5c5c7;
font-size: rem;
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const TextTitle = styled.div`
  color: #c5c5c7;
  font-size: 1rem;
  opacity: 0.8;
  margin-top: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px #cec7e1 solid;
`;

export const Button = styled.button`
  background: #5e44c3;
  color: white;
  width: 13rem;
  height: 3rem;
  border-radius: 45px;
  outline: none;
  border: none;
  font-weight: 900;
  box-shadow: 0px 20px 30px rgba(13, 153, 255, 0.5);
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const ContainerButton = styled.div`
display: flex;
justify-content: center;
padding: 2rem;
flex-direction: column;
align-items: center;
`;

export const ContainerButtonSocial = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
gap: 2rem;
`;

export const ButtonSocial = styled.div<{color: string}>`
  width: 3rem;
  height: 2rem;
  border-radius: 45px;
  background: ${props => props.color };
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 20px 30px rgba(13, 153, 255, 0.5);
`;

export const IconFacebook = styled(Facebook)`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`;

export const IconTwitter = styled(Twitter)`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`;

export const IconGooglePlus = styled(GooglePlus)`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`;