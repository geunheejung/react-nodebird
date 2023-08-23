import { Form, Input } from "antd";
import React, { useMemo } from "react";
import { styled } from "styled-components";

type Props = {};

const FormWrapper = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d;
  padding: 10px;
`;

function NicknameEditForm({}: Props) {
  return (
    <FormWrapper>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </FormWrapper>
  );
}

export default NicknameEditForm;
