import { UnderlineButtonProps } from "./UnderlineButton.type"

const UnderlineButton = ({linkTo, buttonText}: UnderlineButtonProps) => {
  return (
    <a href={linkTo} className="w-fit border-b-[0.5px] hover:border-b-2 transition-duration-700">
        {buttonText}
    </a>
  );
}
export default UnderlineButton