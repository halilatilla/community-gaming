export default function getPaginatedList<T>(list: T[], page: number, pageSize: number): T[] {
  return list.slice((page - 1) * pageSize, page * pageSize)
}
