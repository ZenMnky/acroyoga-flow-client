import React from 'react';
import ContentContainer from '../../Components/StyledComponents/ContentContainer';
import GifImg from '../../Components/StyledComponents/GifyImg';

export default function PageNotFound() {
  const gifyOption = [
    'https://media.giphy.com/media/ewelN8qzxQqNG/giphy.gif',
    'https://media.giphy.com/media/9rrs5SOTBtnRFsCr0f/giphy.gif',
    'https://media.giphy.com/media/HkEAY1Yu8UWLS/giphy.gif',
    'https://media.giphy.com/media/12i4cKEmNBrBiU/giphy.gif',
    'https://media.giphy.com/media/z1Z1ZeNBAv1cI/giphy.gif',
    'https://media.giphy.com/media/KRB0DCpSFQeT6/giphy.gif',
    'https://media.giphy.com/media/EGuKKDrOhlycE/giphy.gif',
    'https://media.giphy.com/media/FewMZauWeGB0IpNpVO/giphy.gif',
    'https://media.giphy.com/media/lOgzjLU2mmN3VoUG4S/giphy.gif',
    'https://media.giphy.com/media/mUrBX1TF0kCRi/giphy.gif',
    'https://media.giphy.com/media/xUPGclJ5wKOJmENxcs/giphy.gif',

  ];

  const selectRandomGif = () => {
    const randomGif = gifyOption[Math.floor(Math.random() * gifyOption.length)];
    return randomGif;
  };

  const title = `Something just doesn't seem quite right`;
  
  return (
    <ContentContainer fullView>
      <h1>Page Not Found</h1>
      <ContentContainer>
        <h2>{title}</h2>
        <GifImg src={selectRandomGif()} alt="humorous gif" />
      </ContentContainer>

    </ContentContainer>
  );
}
