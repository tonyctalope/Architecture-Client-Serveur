import Button from 'react-bootstrap/Button';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

type RedirectButtonProps = {
  variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  href: string;
  color?: string;
};

export const RedirectButton = ({ variant, href, color }: RedirectButtonProps) => {
  return (
    <Button variant={variant} href={href}>
      <BsFillArrowLeftCircleFill size={30} color={color} />
    </Button>
  );
};
