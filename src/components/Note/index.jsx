/* eslint-disable react/prop-types */

import { Container } from "./styles";
import { Tag } from "../Tag";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name.charAt(0).toUpperCase()+tag.name.slice(1)} />
          ))}
        </footer>
      )}
    </Container>
  );
}


