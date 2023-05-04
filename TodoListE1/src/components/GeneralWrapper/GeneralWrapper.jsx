import React from "react";
import styled from "styled-components";

const WrapperGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  justify-content: center;
  height: 100vh;
  width: 100;
`;

const GeneralWrapper = ({ children }) => {
  return (
    <>
      <WrapperGeneral>{children}</WrapperGeneral>
    </>
  );
};

export default GeneralWrapper;
