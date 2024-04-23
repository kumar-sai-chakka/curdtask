import React from 'react';
function App() {
  return (
    <div>
      <div>
        <center >
          <form >
            <table>
              <tr>
                <td><p>Employee Name</p></td>
                <td><p><input type="text" /></p></td>
              </tr>
              <tr>
                <td><p>Employee ID</p></td>
                <td><p><input type="text" /></p></td>
              </tr>
              <tr>
                <td><p>Employee Department</p></td>
                <td><p><input type="text" /></p></td>
              </tr>
              <tr>
                <td><p>Employee Age</p></td>
                <td><p><input type="text" /></p></td>
              </tr>
              <input type="submit"  value="submit" />
            </table>
          </form>
        </center>
      </div>
    </div>
  );
}

export default App;
