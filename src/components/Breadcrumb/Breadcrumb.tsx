import { BreadcrumpProps } from "./Breadcrumb.type";

const Breadcrumb = ({title, subtitle}: BreadcrumpProps) => {
  return (
    <div className="text-section m-auto w-fit font-myfont text-4xl">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};
export default Breadcrumb;
