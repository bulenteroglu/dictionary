import { IconTypes } from "@/types/icons";
import getIcon from "@/utils/getIcon";

export default function Icon({ type }: { type: IconTypes }) {
  return <>{getIcon(type)}</>;
}
