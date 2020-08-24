import React, { useState, useEffect, Fragment } from "react";
import classes from "./Table.module.less";
import plus from "images/add.svg";
import minus from "images/substract.svg";

export default ({
  dataSource,
  columns,
  rowKey,
  className,
  expandedRowRender,
  responsive,
  largeRows,
}) => {
  let [rowsStatus, setRowsStatus] = useState([]);
  useEffect(() => {
    openAll();
  }, []);

  let switchStatus = (index) => {
    let newRowStatus = [...rowsStatus];
    newRowStatus[index] = !rowsStatus[index];
    setRowsStatus(newRowStatus);
  };

  let openAll = () => {
    let newRowStatus = Array((!!dataSource && dataSource.length) || 0).fill(
      true
    );
    setRowsStatus(newRowStatus);
  };

  let closeAll = () => {
    let newRowStatus = Array((!!dataSource && dataSource.length) || 0).fill(
      false
    );
    setRowsStatus(newRowStatus);
  };

  return (
    <div className={classes.large}>
      {expandedRowRender ? (
        <div className={classes.buttons}>
          <button onClick={openAll}>
            {" "}
            <img src={plus} />
            Expand All
          </button>
          <button onClick={closeAll}>
            <img src={minus} />
            Collapse All
          </button>
        </div>
      ) : null}
      <div
        className={[
          classes.container,
          responsive ? classes.responsive : "",
          largeRows ? classes.largeRows : "",
        ].join(" ")}
      >
        <table className={className}>
          <thead>
            <tr>
              {expandedRowRender ? (
                <th className={classes.expandableHeader}></th>
              ) : null}
              {columns.map(({ title, className: c }, index) => (
                <th
                  key={index}
                  className={[c, classes.expandableButton].join(" ")}
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((row, index) => (
              <Fragment key={(!!rowKey && row[rowKey]) || index}>
                <tr
                  className={[
                    expandedRowRender ? classes.expandableRow : "",
                    classes.mainRow,
                  ].join(" ")}
                  onClick={() => switchStatus(index)}
                >
                  {expandedRowRender ? (
                    <td className={classes.expandableButton}>
                      <img
                        src={rowsStatus[index] ? minus : plus}
                        className={classes.plusIcon}
                      />
                    </td>
                  ) : null}
                  {columns.map(
                    (
                      {
                        dataIndex,
                        render,
                        className,
                        width,
                        title,
                        hideResponsiveTitle,
                      },
                      key
                    ) => (
                      <td key={key} className={className} style={{ width }}>
                        <>
                          {!hideResponsiveTitle ? (
                            <>
                              <span className={classes.responsiveHeader}>
                                {title}
                              </span>
                            </>
                          ) : expandedRowRender ? (
                            <img
                              src={rowsStatus[index] ? minus : plus}
                              className={[
                                classes.plusIcon,
                                classes.plusIconMobile,
                              ].join(" ")}
                            />
                          ) : null}
                          <span
                            className={
                              !hideResponsiveTitle
                                ? classes.responsiveText
                                : classes.notResponsiveText
                            }
                          >
                            {render
                              ? render(row[dataIndex], row)
                              : row[dataIndex]}
                          </span>
                        </>
                      </td>
                    )
                  )}
                </tr>
                {expandedRowRender ? (
                  <tr
                    className={
                      rowsStatus[index] ? classes.rowOpen : classes.rowClosed
                    }
                  >
                    <td colspan={columns.length + 1}>
                      {expandedRowRender(row)}
                    </td>
                  </tr>
                ) : null}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
