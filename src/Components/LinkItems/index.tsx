import { data } from '../../Mocks/data';
import * as C from './styles';

const LinkItems = () => {
  return (
    <>
      {data.map((item, index) => (
        <C.Container key={index}>
          <a href={item.link} target="_blank" rel="noreferrer">
            <h4>{item.title}</h4>
            <span>{item.emoji}</span>
          </a>
        </C.Container>
      ))}
      
    </>
      
  );
}

export default LinkItems;