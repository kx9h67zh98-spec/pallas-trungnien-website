/** A promotion must have a valid, finite window; missing/invalid dates cannot go live. */
export function promotionIsCurrent(
  row:{title?:string;startsAt?:string;endsAt?:string},
  now:number=Date.now()
):boolean {
  if(!row.title?.trim()||!row.startsAt||!row.endsAt||!Number.isFinite(now))return false;
  const start=Date.parse(row.startsAt);
  const end=Date.parse(row.endsAt);
  return Number.isFinite(start)&&Number.isFinite(end)&&start<=now&&now<end&&end>start;
}
