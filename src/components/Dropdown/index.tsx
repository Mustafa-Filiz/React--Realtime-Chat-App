import { useState } from "react"
import StyledDropdown from "./style"

interface DropdownProps {
    open?: boolean
}

function Dropdown({open}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(open)
  return (
    <StyledDropdown>Dropdown</StyledDropdown>
  )
}

export default Dropdown