import { ReactNode, useState } from "react";
import { Menu, Input, Row, Col } from "antd";
import Link from "next/link";
import routes from "../route";
import LoginForm from "./LoginForm";

interface IAppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: IAppLayoutProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { home, signup, profile } = routes;

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href={home.url}>{home.label}</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={profile.url}>{profile.label}</Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href={signup.url}>{signup.label}</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn || <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          오른쪽 메뉴
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
