import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  table: {
    display: 'table',
    marginTop: 10
  },
  row: {
    display: 'table-row'
  },
  cell: {
    display: 'table-cell',
    padding: 10
  }
});

const Table = ({ table, toPercent }) =>
  <div className={css(styles.table)}>
    {
      table.map((row, i) =>
        <div className={css(styles.row)} key={i}>
          {
            row.map((x, j) =>
              <div
                key={`${i}${j}`}
                className={css(styles.cell)}
                style={{ background: `rgba(74, 174, 53, ${x})` }}
              >
                {toPercent(x)}
              </div>
            )
          }
        </div>
      )
    }
  </div>

export default Table;
