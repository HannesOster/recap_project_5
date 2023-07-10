import Link from "next/link";
import styled from "styled-components";

const Navbar = styled.nav`
  text-decoration: none;
  font-weight: 800;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #9a031e;
`;

export default function Navigation() {
  return (
    <Navbar>
      <Link href="/">Spotlight</Link>
      <Link href="/art-pieces">Pieces</Link>
    </Navbar>
  );
}
