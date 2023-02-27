import { Timestamp } from "@firebase/firestore-types";
import moment from "moment";
export const convertTimestamp = (timestamp:Timestamp | undefined) => timestamp !== undefined ? moment(timestamp.toDate()).format('YYYY-MM-DD') : "fecha erronea"

