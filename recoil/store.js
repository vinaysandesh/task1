import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';


export const loggedInUserType = atom({
    key: 'logged_in_user_type ', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
  });