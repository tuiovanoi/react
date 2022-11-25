import React, { useEffect, useState } from "react";
import metalica from "assets/img/metalica.jpeg";
import * as S from "./styles";
import { CardComponent } from "components";
import { apiMessage } from "services/data";
import { IMessageData } from "interfaces/message.interface";

const Home = () => {
  const [messages, setMessage] = useState<IMessageData[]>()
  useEffect(() => {
    const fetchData = async () => {
      const response = await apiMessage.index()
      setMessage(response.data)
    }
    fetchData()
  }, [])

  return (
    <S.Home>
      <picture>
        <img src={metalica} alt="Imagens principais" />
      </picture>
      <aside>
        {messages && messages.map((item) => <CardComponent key={item.id} dados={item} />)}
      </aside>
    </S.Home>
  );
};

export default Home;
