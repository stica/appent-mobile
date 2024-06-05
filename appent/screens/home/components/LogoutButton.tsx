import {Button, StyleSheet} from "react-native";
import {useAppDispatch} from "../../../src/redux/hooks";
import {logout} from "../../../src/redux/features/auth/authSlice";
import {router} from "expo-router";

export default function LogoutButton() {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
    router.replace('/(auth)');
  }

  return <Button title={"Logout"} onPress={onLogout}/>
}
