import { useState } from "react"

interface DropdownProps {
    open?: boolean
}

function Dropdown({open}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(open)
  return (
    <div>Dropdown</div>
  )
}

export default Dropdown