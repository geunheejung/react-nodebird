import { Form, Input } from "antd";
import React, { useMemo } from "react";
import { styled } from "styled-components";

type Props = {};

function NicknameEditForm({}: Props) {
  return (
    <Form
      style={{
        marginBottom: "20px",
        border: "1px solid #d9d",
        padding: "10px",
      }}
    >
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
}

export default NicknameEditForm;
