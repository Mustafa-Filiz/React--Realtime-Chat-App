import { useEffect } from "react";
import { useState } from "react";
import StyledDropdown from "./style";

interface DropdownProps {
  children: React.ReactNode;
  open: boolean;
}

function Dropdown({ children, open }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <StyledDropdown>
      <div className="dropdown-trigger">{children}</div>

      {isOpen && <div className="dropdown-layout"></div>}
    </StyledDropdown>
  );
}

export default Dropdown;
