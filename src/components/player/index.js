import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styled/player';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPLayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPLayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPLayer, setShowPlayer } = useContext(PlayerContext);
  return showPLayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body,
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPLayer, setShowPlayer } = useContext(PlayerContext);
  return <Button onClick={() => setShowPlayer((showPLayer) => !showPLayer)}>Play</Button>;
};
