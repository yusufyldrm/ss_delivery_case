import { Header } from 'components';

const AppLayout = ({ children }) => {
  return (
    <>
      <main>
        <Header />
        {children}
      </main>
    </>
  )
};

export default AppLayout;
