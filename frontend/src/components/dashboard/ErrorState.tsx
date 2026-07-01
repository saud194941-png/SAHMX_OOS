export function ErrorState({ message = "تعذر تحميل البيانات. يتم عرض بيانات demo بدلًا من ذلك." }) {
  return <div className="panel glass"><span className="status danger">Error</span><p>{message}</p></div>;
}
