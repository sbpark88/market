import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default dayjs;

export const formatDate = (date: Date) => dayjs(date).format("YYYY-M-D A h:m");

export const fromNow = (date: Date) => dayjs(date).fromNow();
