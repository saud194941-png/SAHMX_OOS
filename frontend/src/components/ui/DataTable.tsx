import { TableRow } from "@/types";

export function DataTable({ rows }: { rows: TableRow[] }) {
  if (!rows.length) {
    return <div className="panel glass">لا توجد بيانات بعد. أضف أول عنصر لبدء التحليل.</div>;
  }

  const headers = Object.keys(rows[0]);
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
