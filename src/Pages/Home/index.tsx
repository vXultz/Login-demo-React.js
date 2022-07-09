import React from 'react';

import * as Style from './style';
import imgLogin from '../../img/login.jpg';

export default function Home() {
  return ( 
  <Style.Container>
    <Style.ContainerImg>
    <img src={imgLogin} width={'100%'}></img>
    </Style.ContainerImg>
    <Style.ContainerIcon>
      <Style.IconMapMarkerAlt/>
        <h1>VISION GO</h1>
    </Style.ContainerIcon>
    <Style.BoxWhite>
      <Style.ContainerText>
        <Style.Text>Bem-vindo</Style.Text>
        <Style.TextInside>Sistem de controle</Style.TextInside>
      </Style.ContainerText>
      <Style.ContainerInput>
        <Style.TextTitle>E-mail</Style.TextTitle>
        <Style.Input></Style.Input>
      </Style.ContainerInput>
      <Style.ContainerInput>
        <Style.TextTitle>Senha</Style.TextTitle>
        <Style.Input></Style.Input>
      </Style.ContainerInput>
      <Style.ContainerButton>
        <Style.Button>Login</Style.Button>
        <Style.TextInside>Ou faça login com</Style.TextInside>
      </Style.ContainerButton>
      <Style.ContainerButtonSocial>
        <Style.ButtonSocial color = {'#1155aa'}>
          <Style.IconFacebook></Style.IconFacebook>
        </Style.ButtonSocial>
        <Style.ButtonSocial color = {'#0aaafd'}>
          <Style.IconTwitter></Style.IconTwitter>
        </Style.ButtonSocial>
        <Style.ButtonSocial color = {'#f15d5b'}>
          <Style.IconGooglePlus></Style.IconGooglePlus>
        </Style.ButtonSocial>
      </Style.ContainerButtonSocial>
    </Style.BoxWhite>
  </Style.Container>
  );
}
