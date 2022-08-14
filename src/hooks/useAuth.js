import { useObserver } from 'mobx-react';
import userStore from 'store/user.store';

function useAuth() {
  return useObserver(() => (userStore.isAuthenticated))
};

export default useAuth;
