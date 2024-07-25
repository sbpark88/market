import { describe, expect, test } from "@jest/globals";
import {
  dayDiff,
  dayDiffFromNow,
  extractDate,
  hourDiff,
  hourDiffFromNow,
  timeDiff,
  timeDiffFromNow,
} from "./calendar";

describe("day diff", () => {
  test("from(2024-07-23) to(2024-07-28) to equal 5", () => {
    const expected = 5;

    // given
    const from = new Date("2024-07-23");
    const to = new Date("2024-07-28");

    // when
    const received = dayDiff(from, to);

    // then
    // expect(1 + 2).toBe(3);
    expect(received).toBe(expected);
  });
  test("from(2024-07-28) to(2024-07-26) to equal -2", () => {
    const expected = -2;

    // given
    const from = new Date("2024-07-28");
    const to = new Date("2024-07-26");

    // when
    const received = dayDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
  test("from(2024-07-31) to(2024-08-01) to equal 1", () => {
    const expected = 1;

    // given
    const from = new Date("2024-07-31");
    const to = new Date("2024-08-01");

    // when
    const received = dayDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
  test("from(2024-08-01) to(2024-07-31) to equal -1", () => {
    const expected = -1;

    // given
    const from = new Date("2024-08-01");
    const to = new Date("2024-07-31");

    // when
    const received = dayDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
  test("from(2024-07-28) to(2024-07-28) to equal 0", () => {
    const expected = 0;

    // given
    const from = new Date("2024-07-28");
    const to = new Date("2024-07-28");

    // when
    const received = dayDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
});

describe("day diff from now", () => {
  const now = new Date();
  const currentDate = now.getDate();

  test("3 days after to equal 3", () => {
    const expected = 3;

    // given
    const targetDate = new Date();
    targetDate.setDate(currentDate + 3);

    // when
    const received = dayDiffFromNow(targetDate);

    // then
    expect(received).toBe(expected);
  });
  test("3 days ago to equal -3", () => {
    const expected = -3;

    // given
    const targetDate = new Date();
    targetDate.setDate(currentDate - 3);

    // when
    const received = dayDiffFromNow(targetDate);

    // then
    expect(received).toBe(expected);
  });
});

describe("hour diff", () => {
  test("from(07:00) to(07:59) to equal 0", () => {
    const expected = 0;

    // given
    const from = new Date("2024-07-28 07:00");
    const to = new Date("2024-07-28 07:59");

    // when
    const received = hourDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
  test("from(07:00) to(06:01) to equal 0", () => {
    const expected = 0;

    // given
    const from = new Date("2024-07-28 07:00");
    const to = new Date("2024-07-28 06:01");

    // when
    const received = hourDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
  test("from(07:00) to(08:59) to equal 1", () => {
    const expected = 1;

    // given
    const from = new Date("2024-07-28 07:00");
    const to = new Date("2024-07-28 08:59");

    // when
    const received = hourDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
  test("from(07:00) to(05:01) to equal -1", () => {
    const expected = -1;

    // given
    const from = new Date("2024-07-28 07:00");
    const to = new Date("2024-07-28 05:01");

    // when
    const received = hourDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
});

describe("hour diff from now", () => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  test("6 hours 45 minutes ago to equal -6", () => {
    const expected = -6;

    // given
    const targetDate = new Date();
    targetDate.setHours(currentHour - 6);
    targetDate.setMinutes(currentMinutes - 45);

    // when
    const received = hourDiffFromNow(targetDate);

    // then
    expect(received).toBe(expected);
  });
  test("3 hours 59 minutes after to equal 3", () => {
    const expected = 3;

    // given
    const targetDate = new Date();
    targetDate.setHours(currentHour + 3);
    targetDate.setMinutes(currentMinutes + 59);

    // when
    const received = hourDiffFromNow(targetDate);

    // then
    expect(received).toBe(expected);
  });
  test("1 hours after to equal 1", () => {
    const expected = 1;

    // given
    const targetDate = new Date();
    targetDate.setHours(currentHour + 1);

    // when
    const received = hourDiffFromNow(targetDate);

    // then
    expect(received).toBe(expected);
  });
  test("1 hours ago to equal -1", () => {
    const expected = -1;

    // given
    const targetDate = new Date();
    targetDate.setHours(currentHour - 1);

    // when
    const received = hourDiffFromNow(targetDate);

    // then
    expect(received).toBe(expected);
  });
  test("59 minutes ago to equal 0", () => {
    const expected = 0;

    // given
    const targetDate = new Date();
    targetDate.setMinutes(currentMinutes - 59);

    // when
    const received = hourDiffFromNow(targetDate);

    // then
    expect(received).toBe(expected);
  });
});

describe("time diff", () => {
  test("59 minutes later to equal '지금'", () => {
    const expected = "지금";

    // given
    const from = new Date("2024-07-28 13:00:00");
    const to = new Date("2024-07-28 13:00:59");

    // when
    const received = timeDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
  test("3 hours later to equal '3시간 후'", () => {
    const expected = "3시간 후";

    // given
    const from = new Date("2024-07-28 13:00:00");
    const to = new Date("2024-07-28 16:00:00");

    // when
    const received = timeDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
  test("3 hours ago to equal '3시간 전'", () => {
    const expected = "3시간 전";

    // given
    const from = new Date("2024-07-28 13:00:00");
    const to = new Date("2024-07-28 10:00:00");

    // when
    const received = timeDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
  test("3 days later to equal '3일 후'", () => {
    const expected = "3일 후";

    // given
    const from = new Date("2024-07-28 13:00:00");
    const to = new Date("2024-07-31 03:00:00");

    // when
    const received = timeDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
  test("3 days ago to equal '3일 전'", () => {
    const expected = "3일 전";

    // given
    const from = new Date("2024-07-28 13:00:00");
    const to = new Date("2024-07-25 00:00:00");

    // when
    const received = timeDiff(from, to);

    // then
    expect(received).toBe(expected);
  });
});

describe("time diff from now", () => {
  const now = new Date();
  const currentDate = now.getDate();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  test("3 days ago to equal '3일 전'", () => {
    const expected = "3일 전";

    // given
    const targetDate = new Date();
    targetDate.setDate(currentDate - 3);

    // when
    const received = timeDiffFromNow(targetDate);

    // then
    expect(received).toBe(expected);
  });
  test("2 hours ago to equal '2시간 전'", () => {
    const expected = "2시간 전";

    // given
    const targetDate = new Date();
    targetDate.setHours(currentHour - 2);
    targetDate.setMinutes(currentMinutes - 59);

    // when
    const received = timeDiffFromNow(targetDate);

    // then
    expect(received).toBe(expected);
  });
  test("59 minutes ago to equal '지금'", () => {
    const expected = "지금";

    // given
    const targetDate = new Date();
    targetDate.setMinutes(currentMinutes - 59);

    // when
    const received = timeDiffFromNow(targetDate);

    // then
    expect(received).toBe(expected);
  });
});

describe("extract date", () => {
  test("'2024-07-31 03:00:00 to equal '2024-07-31'", async () => {
    const expected = "2024-07-31";

    // given
    const targetDate = new Date("2024-07-31 03:00:00");

    // when
    const received = extractDate(targetDate);

    // then
    expect(received).toBe(expected);
  });
});
