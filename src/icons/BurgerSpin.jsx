import { FC } from "react";
import  "./styles.scss";

export const BurgerSpin: FC<IconPropss> = ({ isClosed }) => (
  <div className={`burger burger-spin ${isClosed && "is-closed"}`} ></div>
);
