import * as React from "react";
import "./styles";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  to?: string;
  href?: string;
};

export const Link: React.FC<Props> = ({ to, href, children }) =>
  href ? (
    <a href={href} className="link">
      {children}
    </a>
  ) : (
    <RouterLink to={to as string} className="link">
      {children}
    </RouterLink>
  );