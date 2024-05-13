// import React from "react";
// import { Avatar, Button, Card, Flex, Typography } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import { useAuth } from "../context/AuthContext";
// import "../App.css";
// const Dashboard = () => {
//   const { userData, logout } = useAuth();

//   return (
//     <Button
//       size="large"
//       type="primary"
//       className="profile-btn"
//       onClick={logout}
//     >
//       Logout
//     </Button>
//   );
// };

// export default Dashboard;

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { userData, logout } = useAuth();
  return (
    <header className="bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt=""
            />
          </a>
        </div>

        <div className=" lg:flex lg:flex-1 lg:justify-end">
          <a
            onClick={logout}
            href="#"
            className="text-sm font-semibold leading-6 text-white"
          >
            Log out <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
