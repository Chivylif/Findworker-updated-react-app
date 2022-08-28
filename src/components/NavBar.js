import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import "./nav.module.css";
export default function NavBar() {
  return (
    <>
      <AnchorWrapper>
        <LeftAnchor>
          <Link to="/">FindWorker</Link>
          <Link to="/books">Books</Link>
          <Link to="/characters">Characters</Link>
        </LeftAnchor>
        <div className="rightAnchor">
          <form className="d-flex" method="get">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </AnchorWrapper>
    </>
  );
}
const AnchorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  padding: 1rem;
`;

const LeftAnchor = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  & > * {
    margin-left: 50px;
  }
`;
