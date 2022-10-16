import UserCards from "components/userCards";
import React from "react";
import { ReactComponent as UsersLogo } from "assets/svg/user.svg";
import { ReactComponent as ActiveUsers } from "assets/svg/activeUser.svg";
import { ReactComponent as LoanLogo } from "assets/svg/loan.svg";
import { ReactComponent as Savings } from "assets/svg/saving.svg";
import { ReactComponent as TableIcon } from "assets/svg/tableIcon.svg";
import { ReactComponent as EyeIcon } from "assets/svg/eye.svg";
import { ReactComponent as BlackListUser } from "assets/svg/blacklist.svg";
import { ReactComponent as ActivateUser } from "assets/svg/activate.svg";
import "./styles.scss";
import Badge from "components/badge";
import Menu from "components/menu";

const Users = () => {
  return (
    <div className="userContainer">
      <h5>Users</h5>
      <div className="userCardContainer">
        <UserCards
          text="USERS"
          value={2453}
          iconType={"user"}
          icon={<UsersLogo />}
        />
        <UserCards
          text="ACTIVE USERS"
          value={2453}
          iconType={"activeUser"}
          icon={<ActiveUsers />}
        />
        <UserCards
          text="USERS WITH LOANS"
          value={12453}
          iconType={"loans"}
          icon={<LoanLogo />}
        />
        <UserCards
          text="USERS WITH SAVINGS"
          value={102453}
          iconType={"savings"}
          icon={<Savings />}
        />
      </div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>
                <div className="header">
                  <h3>ORGANIZATION</h3>
                  <span>
                    <TableIcon />
                  </span>
                </div>
              </th>
              <th>
                <div className="header">
                  <h3>USERNAME</h3>
                  <TableIcon />
                </div>
              </th>
              <th>
                <div className="header">
                  <h3>EMAIL</h3>
                  <TableIcon />
                </div>
              </th>
              <th>
                <div className="header">
                  <h3>PHONE NUMBER</h3>
                  <TableIcon />
                </div>
              </th>
              <th>
                <div className="header">
                  <h3>DATE JOINED</h3>
                  <TableIcon />
                </div>
              </th>
              <th>
                <div className="header">
                  <h3>STATUS</h3>
                  <TableIcon />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {Array(7)
              .fill(0)
              .map((items, index: number) => (
                <tr>
                  <td>
                    <h6>Lendsqr</h6>
                  </td>
                  <td>
                    <h6>Adedeji</h6>
                  </td>
                  <td>
                    <h6>adedeji@gmail.com</h6>
                  </td>
                  <td>
                    <h6>08078903721</h6>
                  </td>
                  <td>
                    <h6>May 15, 2020 10:00 AM</h6>
                  </td>
                  <td>
                    <Badge text={"Active"} type={"active"} />
                  </td>
                  <td>
                    <Menu>
                      <div>
                        <div className="menuIconText">
                          <EyeIcon />
                          <h2>View Details</h2>
                        </div>
                        <div className="menuIconText">
                          <BlackListUser />
                          <h2>Blacklist User</h2>
                        </div>
                        <div className="menuIconText">
                          <ActivateUser />
                          <h2>Activate User</h2>
                        </div>
                      </div>
                    </Menu>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
