import { FC } from "react";
import CCMenubar from "../../lib/ui-kit/CCMenubar";
import { MenuItem } from "primereact/menuitem";

const Navbar: FC = () => {
  const items: MenuItem[] = [
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Quit",
          icon: "pi pi-fw pi-power-off",
        },
      ],
    },
  ];
  return (
    <CCMenubar
      className="justify-content-between"
      model={items}
      start={
        <i
          className="pi pi-whatsapp"
          style={{ color: "var(--green-500)", fontSize: "3rem" }}
        ></i>
      }
    />
  );
};

export default Navbar;
