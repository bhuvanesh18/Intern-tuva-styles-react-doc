import React from "react";
const TableHeading = props => {
  const { th, style, colspan, rowspan } = props;
  let isundefined = style ? style : "";
  let col = colspan ? colspan : "";
  let row = rowspan ? rowspan : "";
  return (
    <th
      className={`py-1 px-2 border font-weight-normal ${isundefined}`}
      colspan={col}
      rowspan={row}
    >
      {th}
    </th>
  );
};
export default TableHeading;
