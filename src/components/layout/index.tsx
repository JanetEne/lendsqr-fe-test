import React from "react";
import { ReactComponent as Close } from "assets/svg/close.svg";
import { ReactComponent as LendsqrLogo } from "assets/svg/lendsqr.svg";
import { ReactComponent as UnionLogo } from "assets/svg/Union.svg";
import { ReactComponent as Users } from "assets/svg/users.svg";
import { ReactComponent as Guarantors } from "assets/svg/guarantors.svg";
import { ReactComponent as Loans } from "assets/svg/loans.svg";
import { ReactComponent as Decisions } from "assets/svg/decisions.svg";
import { ReactComponent as DashBoard } from "assets/svg/dashboardIcon.svg";
import { ReactComponent as Briefcase } from "assets/svg/briefcase.svg";
import { ReactComponent as FluidArrowDown } from "assets/svg/fluidArrowDown.svg";
import { INavItems } from "core/interfaces/nav";
import { Link, Outlet, useLocation } from "react-router-dom";
import NavBar from "components/navBar";
import "./layout.scss";

const Layout = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const location = useLocation();
  console.log(location.pathname);

  const customerData: INavItems[] = [
    {
      name: "Users",
      link: "/app/users",
      icon: <Users />,
    },
    {
      name: "Guarantors",
      link: "/guarantors",
      icon: <Guarantors />,
    },
    {
      name: "Loans",
      link: "/loan",
      icon: <Loans />,
    },
    {
      name: "Decision Models",
      link: "/decisions",
      icon: <Decisions />,
    },
    {
      name: "Savings",
      link: "/savings",
      icon: <Decisions />,
    },
    {
      name: "Loan Requests",
      link: "/loan-requests",
      icon: <Decisions />,
    },
    {
      name: "Whitelist",
      link: "/whitelist",
      icon: <Decisions />,
    },
    {
      name: "Karma",
      link: "/karma",
      icon: <Decisions />,
    },
  ];

  const businessData: INavItems[] = [
    {
      name: "Organization",
      link: "/organization",
      icon: <Users />,
    },
    {
      name: "Loan Products",
      link: "/loans",
      icon: <Guarantors />,
    },
    {
      name: "Savings Product",
      link: "/savings",
      icon: <Loans />,
    },
    {
      name: "Fees and Charges",
      link: "/Fees",
      icon: <Decisions />,
    },
    {
      name: "Transactions",
      link: "/transactions",
      icon: <Decisions />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <Decisions />,
    },
  ];

  return (
    <div className="layout">
      <NavBar onClick={() => setToggle(!toggle)} />
      <aside className={toggle ? "showMobileNav" : "hideMobileNav"}>
        <>
          <i onClick={() => setToggle(!toggle)}>
            <Close />
          </i>
          <div className="iconContainer">
            <a href={"/app/home"}>
              <UnionLogo />
              <LendsqrLogo />
            </a>
          </div>

          <div className="switchOrganization">
            <Briefcase /> <span>Switch Organization</span>
            <FluidArrowDown />
          </div>

          <ul>
            <Link to={"/"}>
              <div
                className={`${
                  location.pathname.includes("/app") ? "activeLink" : ""
                }`}>
                <li>
                  <DashBoard /> <span>Dashboard</span>
                </li>
              </div>
            </Link>
          </ul>

          <h1>CUSTOMERS</h1>
          <ul>
            {customerData.map((item, index) => (
              <Link to={item.link} key={index}>
                <div
                  className={`${
                    location.pathname.includes(item.link) ? "activeLink" : ""
                  }`}>
                  <li>
                    {item.icon} <span>{item.name}</span>
                  </li>
                </div>
              </Link>
            ))}
            {/* <li className="logout">
              <Link to="">
                <Users /> <span>Logout</span>
              </Link>
            </li> */}
          </ul>
          <h1>BUSINESSES</h1>
          <ul>
            {businessData.map((item, index) => (
              <Link to={item.link} onClick={() => setToggle(false)} key={index}>
                <div
                  className={`flex ${
                    location.pathname.includes(item.link) ? "activeLink" : ""
                  }`}>
                  <li>
                    {item.icon} <span>{item.name}</span>
                  </li>
                </div>
              </Link>
            ))}
          </ul>
        </>
      </aside>
      <div className="main">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
