import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './style';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>404 | Not Found</h1>
      <Button
        style={{ width: 'auto' }}
        onClick={() => navigate('/')}
      >
        Go Back
      </Button>
    </Wrapper>
  )
};

export default NotFound;
