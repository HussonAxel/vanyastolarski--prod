export interface ButtonProps {
  text: string;
  isPrimary: boolean;
  isBGGreen: boolean;
  linkTo?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}
