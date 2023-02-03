import Avatar from '../Avatar';
import LinkItems from '../LinkItems';
import Social from '../Social';

import * as C from './styles';

const Main = () => {
  return (
      <C.Container>
          <Avatar/>
          <C.LinkTreeItemsArea>
            <LinkItems/>
          </C.LinkTreeItemsArea>
          <Social/>
      </C.Container>
  );
}

export default Main;