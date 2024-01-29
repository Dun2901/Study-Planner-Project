import "./App.css";

function App() {
  return (
  <div className="App">
    <div className="m-12">hello</div>
      <div>
          <table>
            <thead>
              <tr>
                <th>Nhiệm Vụ</th>
                <th>Người được giao việc</th>
                <th>Deadline</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New 1</td>
                <td>Leo</td>
                <td>12-1</td>
                <td>In Progress</td>
              </tr>
            </tbody>
          </table>
      </div>
  </div>
  );
}

export default App;
