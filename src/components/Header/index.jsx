import { Container, Profile } from "./styles";


export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/jairochabr.png" alt="User Photo" />

        <div>
          <span>Bem vindo,</span>
          <strong>Jairo Rocha</strong>
        </div>
      </Profile>
      
    </Container>
  )
}