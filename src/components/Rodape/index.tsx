import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import * as S from "./styles";

const Rodape = () => {
  return (
    <S.Rodape>
      <div className="content">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
    </S.Rodape>
  );
};

export default Rodape;
