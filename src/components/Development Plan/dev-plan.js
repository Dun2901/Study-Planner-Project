import "./dev-plan.css";

function DevPlan() {
    // const addRow = function() {
    //   var table = document.getElementById("devPlan");
    //   var row = table.insertRow(table.rows.length);
    //   var cell1 = row.insertCell(0);
    //   var cell2 = row.insertCell(1);
    //   cell1.innerHTML = "New Row Data 1";
    //   cell2.innerHTML = "New Row Data 2";
    // }
    return (
        <div>
          <div className="title">Development Plan</div>
          <button class="create-button" onclick={"addRow()"}>Create New Plan</button>
          <body>
            <table id="devPlan">
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