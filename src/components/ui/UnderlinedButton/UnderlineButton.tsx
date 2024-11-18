import { UnderlineButtonProps } from "./UnderlineButton.type"

const UnderlineButton = ({linkTo, buttonText}: UnderlineButtonProps) => {
  return (
    <a href={linkTo} className="w-fit transition-duration-700 hover:underline cursor-pointer">
        {buttonText}
    </a>
  );
}
export default UnderlineButton