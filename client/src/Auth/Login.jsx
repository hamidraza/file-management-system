// import React from "react";
// import { Alert, Card, Flex, Form, Input, Spin, Typography } from "antd";
// import { Link } from "react-router-dom";
// import { useLogin } from "../hooks/useLogin";

// const Login = () => {
//   const { loading, error, loginUser } = useLogin(); // Correctly using useLogin
//   const handleLogin = async (values) => {
//     await loginUser(values);
//   };

//   return (
//     <Card className="form-container">
//       <Flex gap="large" align="center">
//         <Flex vertical flex={1}>
//           <Typography.Title level={3} strong className="title">
//             Sign In
//           </Typography.Title>
//           <Typography.Text type="secondary" strong className="slogan">
//             Unlock your world
//           </Typography.Text>
//           <Form layout="vertical" autoComplete="off" onFinish={handleLogin}>
//             <Form.Item
//               label="Email"
//               name="email"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your Email!",
//                 },
//                 {
//                   type: "email",
//                   message: "Please enter a valid email!",
//                 },
//               ]}
//             >
//               <Input size="large" placeholder="Enter your Email" />
//             </Form.Item>

//             <Form.Item
//               label="Password"
//               name="password"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your Password!",
//                 },
//               ]}
//             >
//               <Input size="large" placeholder="Enter your password" />
//             </Form.Item>

//             {error && (
//               <Alert
//                 description={error}
//                 type="error"
//                 showIcon
//                 closable
//                 className="alert"
//               />
//             )}

//             <Form.Item>
//               <button
//                 className="btn btn1"
//                 type={`${loading ? "" : "primary"}`}
//                 htmlType="submit"
//                 size="large"
//               >
//                 {loading ? <Spin /> : "Log in"}
//                 Sign In
//               </button>
//             </Form.Item>

//             <Form.Item>
//               <Link to="/">
//                 <button size="large" className="btn btn2">
//                   Create an account
//                 </button>
//               </Link>
//             </Form.Item>
//           </Form>
//         </Flex>
//       </Flex>
//     </Card>
//   );
// };

// export default Login;
import React from "react";
import {
  Alert,
  Card,
  Form,
  Input,
  Spin,
  Typography,
  Button,
  Row,
  Col,
} from "antd";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { loading, error, loginUser } = useLogin();
  const handleLogin = async (values) => {
    await loginUser(values);
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={22} sm={16} md={12} lg={8} xl={6}>
        <Card bordered={false} className="form-container">
          <Typography.Title level={3} className="title">
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" className="slogan">
            Unlock your world
          </Typography.Text>
          <Form layout="vertical" onFinish={handleLogin}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your Email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Enter your Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            {error && (
              <Alert description={error} type="error" showIcon closable />
            )}
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Sign In
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/">
                <button size="large" className="btn btn2">
                  Create an account
                </button>
              </Link>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
