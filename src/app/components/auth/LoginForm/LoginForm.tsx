"use client";

import React, { useState } from "react";
import Input from "../../input/Input";
import ContentContainer from "../../containers/ContentContainer/ContentContainer";
import Link from "next/link";
import classes from "./LoginForm.module.css";
import DriverTypeBtn from "../../buttons/DriverTypeBtn/DriverTypeBtn";
import Container from "../../containers/Container";
import AuthFormHeader from "../AuthFormHeader/AuthFormHeader";

const LoginForm = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const handleSelect = (type: string) => {
    setSelectedType(type);
  };

  return (
    <div>
      <Container>
        <ContentContainer>
          <AuthFormHeader
            title="С возвращением!"
            text="Войдите, чтобы продолжить работу и контролировать свои рейсы"
          />
          <form className={classes.form}>
            <Input
              labelTitle="Email или телефон"
              placeholder="Введите ваш email или телефон"
            />
            <Input labelTitle="Пароль" />
          </form>
          <Link href="#" className={classes.forgotPassword}>
            Забыли пароль?
          </Link>

          <div className={classes.driverType}>
            <h3 className={classes.driverTypeTitle}>Тип водителя</h3>
            <DriverTypeBtn
              title="Водитель самосвала"
              isChecked={selectedType === "Водитель самосвала"}
              onChange={() => handleSelect("Водитель самосвала")}
            />
            <DriverTypeBtn
              title="Водитель экскаватора"
              isChecked={selectedType === "Водитель экскаватора"}
              onChange={() => handleSelect("Водитель экскаватора")}
            />
            <DriverTypeBtn
              title="Водитель погрузчика"
              isChecked={selectedType === "Водитель погрузчика"}
              onChange={() => handleSelect("Водитель погрузчика")}
            />
          </div>
        </ContentContainer>
      </Container>
    </div>
  );
};

export default LoginForm;
