import { MENU } from "src/constants/MENU";
import { MenuType } from "src/types/MenuType";

const Header = ({ type }: { type: MenuType }) => {
  const name = "Admin";

  const currentMenu = MENU.find((item) => item.id === type);

  return (
    <header className="mx-1 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-h1-d">{currentMenu?.label}</span>
        <span className="text-body2-d text-gray-800">
          {currentMenu?.description}
        </span>
      </div>
      <span className="text-body1-d">{name}</span>
    </header>
  );
};

export default Header;
