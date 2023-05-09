import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  title?: string;
  href: string;
}

const SidebarItem = ({ title, href }: SidebarProps) => {
  const router = useLocation();

  return (
    <Link
      to={href}
      className={`items-center py-3 rounded-lg ${
        router.pathname == href
          ? `bg-primary text-white`
          : `hover:bg-primary hover:text-white`
      }`}
    >
      <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
    </Link>
  );
};

export default SidebarItem;
