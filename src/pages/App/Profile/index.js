import React from 'react';
import { observer } from 'mobx-react';
import {
  Container,
  ProfileDetail,
  Info,
  Text,
  SubTitle,
  AddressContainer,
  Address,
} from './style';
import { MdVerified } from 'react-icons/md';
import { BiErrorCircle } from 'react-icons/bi';
import userStore from 'store/user.store';
import { dateFormatter } from 'helpers/dateFormatter';

const Profile = observer(() => {

  React.useEffect(() => {

  }, []);

  if (!userStore.userData) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <Container>
      <h1>Profile</h1>
      <ProfileDetail>
        <Info>
          <Text>Name: {userStore.userData.firstName} {userStore.userData.lastName}</Text>
        </Info>
        <Info>
          <Text>Email: <Text $color={!userStore.userData.emailVerified && '#FF0000'}>{userStore.userData.email}</Text></Text>
          {userStore.userData.emailVerified ? <MdVerified size={'20px'} color={'#007CFF'} title={'Verified'} /> : <BiErrorCircle size={'20px'} color={'#FF0000'} title={'Not Verified'} />}
        </Info>
        <Info>
          <Text>Phone: <Text $color={!userStore.userData.smsVerified && '#FF0000'}>{userStore.userData.mobileNumber}</Text></Text>
          {userStore.userData.smsVerified ? <MdVerified size={'20px'} color={'#007CFF'} title={'Verified'} /> : <BiErrorCircle size={'20px'} color={'#FF0000'} title={'Not Verified'} />}
        </Info>

        <Info>
          <Text>Account Created Date: {dateFormatter(userStore.userData.createdAt)}</Text>
        </Info>
      </ProfileDetail>


      <SubTitle>Addresses</SubTitle>
      <AddressContainer>
        {userStore.userData.addresses.map((address, index) => (
          <Address key={index}>
            <Text>{address.fullName}</Text>
            <br />
            <Text>{address.addressLine1}</Text>
            <Text>{address.addressLine2}</Text>
            Flat:<Text>{address.flatNumber}</Text>
            <br />
            PostalCode:<Text>{address.postalCode}</Text>
          </Address>
        ))}
      </AddressContainer>
    </Container>
  )
})

export default Profile;
