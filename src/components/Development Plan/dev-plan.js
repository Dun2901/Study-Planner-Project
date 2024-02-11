import "./dev-plan.css";

function DevPlan() {
    return (
        <div>
          <div className="title">Development Plan</div>
          <body>
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
                <tr>
                  <td>New 2</td>
                  <td>Dun</td>
                  <td>12-5</td>
                  <td>Todo</td>
                </tr>
                <tr>
                  <td>New 3</td>
                  <td>DT</td>
                  <td>12-8</td>
                  <td>Done</td>
                </tr>
              </tbody>
            </table>
          </body>
      </div>
    );
}

export default DevPlan;