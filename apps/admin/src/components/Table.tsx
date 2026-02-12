const Table = ({ data }: { data: {} }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border-[1px] border-gray-100">
      <table className="w-full">
        <thead className="bg-brand-dark text-brand-white text-body1-d h-11">
          <tr>
            <th>권한</th>
            <th>권한</th>
            <th>권한</th>
          </tr>
        </thead>
        <tbody className="bg-brand-white border-box text-center">
          <tr className="h-11 border-t border-gray-100">
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
          <tr className="h-11 border-t border-gray-100">
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
          <tr className="h-11 border-t border-gray-100">
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
          <tr className="h-11 border-t border-gray-100">
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
