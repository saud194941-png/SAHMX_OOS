export function EmptyState({ title = "لا توجد بيانات", body = "ستظهر البيانات هنا بعد الربط أو الاستيراد." }) {
  return (
    <div className="panel glass">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
