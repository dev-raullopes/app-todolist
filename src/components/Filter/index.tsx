import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { FilterStatus } from "@/types/FilterStatus";
import { styles } from "./styles";
import { StatusIcon } from "../StatusIcon";

type Props = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
};

export function Filter({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      {...rest}
    >
      <StatusIcon status={status} />
      <Text style={styles.title}>
        {status === FilterStatus.DONE ? "Concluídos" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
}
