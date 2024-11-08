import Link from "next/link";
import { print } from "graphql/language/printer";

import styles from "./Navigation.module.css";

import { MenuLocationEnum } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { NavigationQuery } from "./Navigation.graphql";
import { MenuItem } from "@/types/navigation.types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getData(location: MenuLocationEnum) {
  /**
   * @todo - implement locale so menus can be fetched in the correct language
   *
   * The value for locale can be extracted from the url. Ideally we shouldn't use
   * the `useParams` hook for that, so this component can be server-side rendered.
   *
   * The locale can be passed as props from the app/[locale]/[[...slug]]/page.tsx file.
   */
  const { menuItems } = await fetchGraphQL<NavigationQuery>(
    print(NavigationQuery),
    { location, language: "en" }
  );

  if (menuItems === null) {
    throw new Error("Failed to fetch data");
  }

  return menuItems;
}

type NavigationProps = {
  location: MenuLocationEnum;
};

export default async function Navigation({ location }: NavigationProps) {
  const menuItems = await getData(location);

  return (
    <nav
      className={styles["navigation"]}
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      {menuItems.nodes.map((item: MenuItem, index: number) => {
        if (!item.uri) return null;

        return (
          <Link
            itemProp="url"
            href={item.uri}
            key={index}
            target={item.target || "_self"}
          >
            <span itemProp="name">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
