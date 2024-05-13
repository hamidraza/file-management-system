// const Register = () => {
// const { loading, error, registerUser } = useSignup();
// const handleRegister = async (values) => {
//   await registerUser(values);
// };

//   return (
//     <Card className="form-container" bordered={false}>
//       <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
//         <Col xs={24} sm={18} md={12} lg={10} xl={8}>
//           <Typography.Title level={3} className="title">
//             Create an Account
//           </Typography.Title>
//           <Typography.Text type="secondary" className="slogan">
//             Join for exclusive access
//           </Typography.Text>
//           <Form layout="vertical" autoComplete="off" onFinish={registerUser}>
//             <Form.Item
//               label="Full Name"
//               name="name"
//               rules={[
//                 { required: true, message: "Please input your full name!" },
//               ]}
//             >
//               <Input placeholder="Enter your full name" />
//             </Form.Item>
//             <Form.Item
//               label="Email"
//               name="email"
//               rules={[
//                 { required: true, message: "Please input your Email!" },
//                 { type: "email", message: "Please enter a valid email!" },
//               ]}
//             >
//               <Input placeholder="Enter your Email" />
//             </Form.Item>
//             <Form.Item
//               label="Password"
//               name="password"
//               rules={[
//                 { required: true, message: "Please input your Password!" },
//               ]}
//             >
//               <Input.Password placeholder="Enter your password" />
//             </Form.Item>
//             <Form.Item
//               label="Confirm Password"
//               name="passwordConfirm"
//               rules={[
//                 { required: true, message: "Please confirm your Password!" },
//               ]}
//             >
//               <Input.Password placeholder="Re-Enter your password" />
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
//               >
//                 {loading ? <Spin /> : "Create Account"}
//               </button>
//             </Form.Item>
//             <Form.Item>
//               <Link to="/login">
//                 <button className="btn btn2">Sign In</button>
//               </Link>
//             </Form.Item>
//           </Form>
//         </Col>
//       </Row>
//     </Card>
//   );
// };

// export default Register;

import React from "react";
import useSignup from "../hooks/useSignup";
import "../App.css";
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
  const { loading, error, registerUser } = useSignup();
  const handleRegister = async (values) => {
    await registerUser(values);
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={22} sm={16} md={12} lg={8} xl={6}>
        <Card bordered={false} className="form-container">
          <Typography.Title level={3} className="title">
            Create an Account
          </Typography.Title>
          <Typography.Text type="secondary" className="slogan">
            Join for exclusive access
          </Typography.Text>
          <Form layout="vertical" onFinish={registerUser}>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>
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
            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              rules={[
                { required: true, message: "Please confirm your Password!" },
              ]}
            >
              <Input placeholder="Re-enter your password" />
            </Form.Item>

            {error && (
              <Alert description={error} type="error" showIcon closable />
            )}
            <Form.Item>
              <button
                className="btn btn1"
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
              >
                {loading ? <Spin /> : "Create Account"}
              </button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <button className="btn btn2">Sign In</button>
              </Link>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
