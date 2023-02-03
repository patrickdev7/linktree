import React from 'react';

import * as C from './styles';

const Avatar = () => {
  return (
      <C.Container>
          <C.ContentAvatar><img src="https://github.com/setxpro.png" alt="avatar"/></C.ContentAvatar>
          <C.ContentInsta>
              <p>@patrick__anjos_</p>
          </C.ContentInsta>
      </C.Container>
  );
}

export default Avatar;