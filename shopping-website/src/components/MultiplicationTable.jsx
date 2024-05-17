import React from 'react';
import './MultiplicationTable.css'; // 引入 CSS 檔案

class MultiplicationTable extends React.Component {
  render() {
    let rows = [];

    for (let black = 3; black < 10; black++) {
      let cells = [];
      for (let jack = 1; jack < 10; jack++) {
        let result = black * jack;
        let resultText = result < 10 ? `0${result}` : result;
        cells.push(
          <td key={jack}>
            ({black}x{jack}={resultText})
          </td>
        );
      }
      rows.push(<tr key={black}>{cells}</tr>);
    }

    return (
      <table className='multi'>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default MultiplicationTable;
