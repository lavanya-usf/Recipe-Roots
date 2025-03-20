import {LucideIcon} from "lucide-react"

interface NavbarElementProps {
  Icon: LucideIcon,
  title: string
}

export const NavbarElement: React.FC<NavbarElementProps> = ({Icon, title}) => {
  return(
    <div className="flex space-x-2 items-center text-white hover:text-gray-700 transition duration-300 cursor-pointer">
      <Icon size={22}/>
      <span className="text-lg font-medium">{title}</span>
    </div>
  )

}