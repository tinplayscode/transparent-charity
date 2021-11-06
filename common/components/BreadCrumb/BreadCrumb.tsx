import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Link {
  name: string;
  url: string;
}

interface Props {
  items: Array<Link>;
}

export default function BreadCrumb({ items }: Props): ReactElement {
  return (
    <Breadcrumb fontWeight="medium" fontSize="sm" mt={2} mx={2}>
      {items.map((item, index) => (
        <BreadcrumbItem isCurrentPage={index == items.length} key={index}>
          <BreadcrumbLink href={item.url}>{item.name}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
