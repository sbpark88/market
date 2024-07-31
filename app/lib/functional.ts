type AnyFunction = (value: unknown) => any;

export const compose =
  (...fns: AnyFunction[]) =>
  (initValue?: unknown) =>
    fns.reduceRight(
      (acc, fn) => (acc instanceof Promise ? acc.then(fn) : fn(acc)),
      initValue,
    );

export const pipe =
  (...fns: AnyFunction[]) =>
  (initValue?: unknown) =>
    fns.reduce(
      (acc, fn) => (acc instanceof Promise ? acc.then(fn) : fn(acc)),
      initValue,
    );
