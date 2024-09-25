/* eslint-disable react/jsx-no-undef */

import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth"
import { Container, Profile, Logout } from "./styles";

export function Header() {
 const {signOut } = useAuth();
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/tallesguerra.png" alt="Foto do usuário" />

        <div>
          <span>Bem-Vindo</span>
          <strong>Talles Guerra</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout >
    </Container>
  );
}
