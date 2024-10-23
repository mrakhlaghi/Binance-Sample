import clsx from "clsx";

function BreadCrumbs({
  className,
  routes,
}: {
  className: string;
  routes: any;
}) {
  return (
    <div className={clsx("breadcrumbs text-sm", className)}>
      <ul>
        {routes.map((route: any) => (
          <li className="text-[0.6rem]" key={route}>
            <a href={route}>{route}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BreadCrumbs;
