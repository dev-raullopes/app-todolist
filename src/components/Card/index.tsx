import { styles } from "./styles";
import { Trash2 } from "lucide-react-native";
import { StatusIcon } from "../StatusIcon";
import { FilterStatus } from "@/types/FilterStatus";
import { TouchableOpacity, Text,View } from "react-native";

type ItemData = {
    status: FilterStatus;
    description: string;
}
type Props = {
    data: ItemData;
    onDelete: () => void;
}
export function Card({ data, onDelete }: Props){
    return (
        <View style={[styles.container, {borderLeftColor: data.status === FilterStatus.PENDING ? '#FA5F1A' : '#1A30FA'}]}>
            <TouchableOpacity style={{marginLeft: 12}}>
                <StatusIcon status={data.status} />
            </TouchableOpacity>
            <Text style={styles.description}>{data.description}</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
                <Trash2 size={18} color="#828282" />
            </TouchableOpacity>
        </View>
    )
}