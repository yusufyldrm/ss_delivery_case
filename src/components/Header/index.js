import userStore from 'store/user.store';
import { BiLogOut as IconLogout } from 'react-icons/bi';
import { MdOutlineDeliveryDining as IconPastDelivery } from 'react-icons/md';
import { FaRegUserCircle as IconPastUser } from 'react-icons/fa';
import {
  Wrapper,
  Content,
  LogoArea,
  Nav,
  Links,
  LogoutButton
} from './style';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoArea to={'/'}>
          <h2>LOGO</h2>
        </LogoArea>

        <Nav>
          <Links to={'/profile'}>Profile <IconPastUser size={'20px'} /></Links>
          <Links to={'/past-orders'}>Past Orders <IconPastDelivery size={'20px'} /> </Links>
          <LogoutButton onClick={() => userStore.logout()}>Logout <IconLogout size={'20px'} /> </LogoutButton>
        </Nav>
      </Content>
    </Wrapper>
  )
};

export default Header;
