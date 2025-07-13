import { FilterStatus } from "@/types/FilterStatus";
import { CircleDashed, CircleCheck } from "lucide-react-native";

export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.DONE ? (
    <CircleCheck size={18} color="#1A30FA"/> // Caso de status DONE, mostrar ícone de check
  ) : (
    <CircleDashed size={18} color="#FA5F1A"/> // Caso de status PENDING, mostrar ícone de dashed
  );
}
