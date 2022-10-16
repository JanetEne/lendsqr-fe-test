import React from "react";
import { ReactComponent as MenuLogo } from "assets/svg/more.svg";
import "./styles.scss";

interface IMenuProps {
  children: JSX.Element;
}

const Menu: React.FC<IMenuProps> = ({ children }) => {
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState(null);

  const onOptionClicked = (value: any) => {
    setSelectedOption(value);
    setShowOptions(false);
  };

  return (
    <div className="menuContainer">
      <div
        className="logoContainer"
        onClick={() => setShowOptions(!showOptions)}>
        <MenuLogo />
      </div>
      {showOptions && (
        <div
          onClick={onOptionClicked}
          className={`menuChildrenContainer ${
            showOptions ? "showMenu" : "hideMenu"
          }`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Menu;
