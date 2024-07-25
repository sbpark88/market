const DAY_MILLISECONDS = 24 * 60 * 60 * 1000;
const HOUR_MILLISECONDS = 60 * 60 * 1000;
const OFFSET_KST_HOURS = 9;
const OFFSET_KST_MILLISECONDS = 9 * 60 * 60 * 1000;

export const dayDiff = (from: Date, to: Date): number => {
  // 밀리초 단위로 인한 오계산을 제거하고 '일' 단위로만 구하기 위해 시간을 자정으로 리셋.
  const resetFrom = new Date(extractDate(from));
  const resetTo = new Date(extractDate(to));

  const [fromTime, toTime, timeDirection] = analyzeTime(resetFrom, resetTo);
  const timeDiff = Math.floor(Math.abs(fromTime - toTime) / DAY_MILLISECONDS);

  if (timeDiff === 0) return 0;
  return timeDirection === "positive" ? timeDiff : -timeDiff;
};

export const dayDiffFromNow = (targetDate: Date) =>
  dayDiff(new Date(), targetDate);

export const hourDiff = (from: Date, to: Date): number => {
  const [fromTime, toTime, timeDirection] = analyzeTime(from, to);
  const timeDiff = Math.floor(Math.abs(fromTime - toTime) / HOUR_MILLISECONDS);

  if (timeDiff === 0) return 0;
  return timeDirection === "positive" ? timeDiff : -timeDiff;
};

export const hourDiffFromNow = (targetDate: Date): number =>
  hourDiff(new Date(), targetDate);

export const timeDiff = (from: Date, to: Date): string => {
  const equalDate = extractDate(from) === extractDate(to);

  if (equalDate) {
    const hours = hourDiff(from, to);
    if (hours === 0) return `지금`;
    return `${Math.abs(hours)}시간 ${hours > 0 ? "후" : "전"}`;
  } else {
    const days = dayDiff(from, to);
    return `${Math.abs(days)}일 ${days > 0 ? "후" : "전"}`;
  }
};

export const timeDiffFromNow = (targetDate: Date): string =>
  timeDiff(new Date(), targetDate);

const analyzeTime = (from: Date, to: Date): [number, number, string] => {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  const timeDirection = toTime >= fromTime ? "positive" : "negative";

  return [fromTime, toTime, timeDirection];
};

/** @private */
export const extractDate = (target: Date) => {
  const offsetDate = new Date(
    target.setHours(target.getHours() + OFFSET_KST_HOURS),
  );
  return offsetDate.toISOString().split("T")[0];
};
