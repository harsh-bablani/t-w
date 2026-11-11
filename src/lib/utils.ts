export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** [10,11,12,1,2,3] → "Oct – Mar"; non-consecutive runs are joined with commas. */
export function formatMonths(months: number[]) {
  const runs: number[][] = [];
  months.forEach((m, i) => {
    const prev = months[i - 1];
    if (i > 0 && (prev % 12) + 1 === m) runs[runs.length - 1].push(m);
    else runs.push([m]);
  });
  return runs
    .map((r) => (r.length === 1 ? monthNames[r[0] - 1] : `${monthNames[r[0] - 1]} – ${monthNames[r[r.length - 1] - 1]}`))
    .join(", ");
}
