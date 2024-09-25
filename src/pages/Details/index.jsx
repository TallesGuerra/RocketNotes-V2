// criando a interface
import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            repellendus totam earum dolores ratione odit atque ea eligendi vel
            quam maiores facilis, ipsam tempora nemo dolorem placeat nisi
            consequuntur expedita?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                {" "}
                <a href="#"> https://www.rocketseat.com.br/ </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#"> https://www.rocketseat.com.br/ </a>{" "}
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="NodeJs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
