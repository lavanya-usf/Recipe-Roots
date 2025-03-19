import { LucideIcon } from "lucide-react";

interface NavbarElementProps {
  Icon: LucideIcon;
  title: string;
}

export const NavbarElement: React.FC<NavbarElementProps> = ({ Icon, title }) => {
  return (
    <div className="flex items-center space-x-2 text-white hover:text-blue-400 transition duration-300 cursor-pointer">
      <Icon size={22} />
      <span className="text-lg font-medium">{title}</span>
    </div>
  );
};
