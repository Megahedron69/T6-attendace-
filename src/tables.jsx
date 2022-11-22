import React from "react";
import DataTable, { Alignment, Direction } from "react-data-table-component";
import { Norecords } from "./Norecords";
const columns = [
  {
    name: "S.No",
    selector: (row) => row[1].Sno,
    sortable: true,
    reorder: true,
  },
  {
    name: "Roll No",
    selector: (row) => row[1].ROLLNO,
    sortable: true,
    reorder: true,
  },
  {
    name: "Student Name",
    selector: (row) => row[1].SNAME,
    sortable: true,
    reorder: true,
    width: "200px",
  },
  {
    name: "ADA",
    selector: (row) => row[1].ADA,
    sortable: true,
    reorder: true,
  },
  {
    name: "ADA Lab",
    selector: (row) => row[1].ADALab,
    sortable: true,
    reorder: true,
  },
  {
    name: "CSP",
    selector: (row) => row[1].CSP,
    sortable: true,
    reorder: true,
  },
  {
    name: "CSP Lab",
    selector: (row) => row[1].CSPLab,
    sortable: true,
    reorder: true,
  },
  {
    name: "Comm System",
    selector: (row) => row[1].CommSys,
    sortable: true,
    reorder: true,
    width: "130px",
  },
  {
    name: "CommSy Lab",
    selector: (row) => row[1].CommSysLab,
    sortable: true,
    reorder: true,
    width: "130px",
  },
  {
    name: "IM",
    selector: (row) => row[1].IM,
    sortable: true,
    reorder: true,
  },
  {
    name: "Java",
    selector: (row) => row[1].Java,
    sortable: true,
    reorder: true,
  },
  {
    name: "Java Lab",
    selector: (row) => row[1].Javalab,
    sortable: true,
    reorder: true,
  },
  {
    name: "SE",
    selector: (row) => row[1].SoftEngg,
    sortable: true,
    reorder: true,
  },
  {
    name: "SE Lab",
    selector: (row) => row[1].SoftEnggLab,
    sortable: true,
    reorder: true,
  },
  {
    name: "Theory Attendance",
    selector: (row) => row[1].Theoryattendance,
    sortable: true,
    reorder: true,
    width: "150px",
  },
  {
    name: "Theory%",
    selector: (row) => row[1].Theorypercage,
    sortable: true,
    reorder: true,
  },
  {
    name: "Total Attendance",
    selector: (row) => row[1].Total,
    sortable: true,
    reorder: true,
    width: "150px",
  },
  {
    name: "Total %",
    selector: (row) => row[1].Totalpercage,
    sortable: true,
    reorder: true,
    conditionalCellStyles: [
      {
        when: (row) => row[1].Totalpercage < 50,
        style: {
          backgroundColor: "rgba(255, 0, 0, 0.9)",
          color: "white",
        },
      },
      {
        when: (row) => row[1].Totalpercage >= 50 && row[1].Totalpercage < 75,
        style: {
          backgroundColor: "rgba(255, 165, 0, 0.9)",
          color: "white",
        },
      },
      {
        when: (row) => row[1].Totalpercage >= 75,
        style: {
          backgroundColor: "rgba(0, 255, 0, 0.9)",
          color: "white",
        },
      },
    ],
  },
];

const ExpandedComponent = ({ data }) => (
  <div>
    <h1>If free will add charts later here</h1>
  </div>
);
const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <input
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      style={{
        color: "black",
        background: "white",
        outline: "none",
        width: "200px",
        borderRadius: "14px",
        padding: "6px 5px",
      }}
      value={filterText}
      onChange={onFilter}
    />
    <button
      type="button"
      onClick={onClear}
      style={{
        background: "transparent",
        outline: "none",
        border: "none",
        cursor: "pointer",
        height: "auto",
      }}
    >
      &#10060;
    </button>
  </>
);

export const KitchenSinkStory = (props) => {
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = props.Data.filter(
    (item) =>
      item[1].SNAME &&
      item[1].SNAME.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <div>
      <DataTable
        title="Attendance List"
        columns={columns}
        data={filterText ? filteredItems : props.Data}
        selector={(row, index) => {
          console.log(row + index);
        }}
        theme={"dark"}
        noDataComponent={<Norecords />}
        defaultSortFieldId={1}
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader={true}
        subHeaderComponent={subHeaderComponentMemo}
        expandableRows={true}
        expandableRowsComponent={ExpandedComponent}
        expandOnRowClicked={true}
        expandableRowsHideExpander={true}
        pagination={true}
        highlightOnHover={true}
        pointerOnHover={true}
        fixedHeader={true}
        responsive={true}
        width={"300"}
      />
    </div>
  );
};

const Template = (args) => <KitchenSinkStory {...args} />;

export const KitchenSink = Template.bind({});

KitchenSink.args = {
  selectableRows: false,
  selectableRowsNoSelectAll: false,
  selectableRowsVisibleOnly: false,
  selectableRowsHighlight: false,
  selectableRowsSingle: false,
  expandableRows: false,
  expandOnRowClicked: false,
  expandOnRowDoubleClicked: false,
  expandableRowsHideExpander: false,
  pagination: true,
  highlightOnHover: false,
  striped: false,
  pointerOnHover: false,
  dense: false,
  persistTableHead: false,
  noHeader: false,
  fixedHeader: false,
  fixedHeaderScrollHeight: "300px",
  progressPending: false,
  noTableHead: false,
  noContextMenu: false,
  direction: Direction.AUTO,
  subHeader: false,
  subHeaderAlign: Alignment.RIGHT,
  subHeaderWrap: true,
  responsive: true,
  disabled: false,
};

export default {
  title: "Getting Started/Kitchen Sink",
  component: KitchenSink,
  parameters: {
    controls: {
      sort: "requiredFirst",
      // docs: {
      // 	page: KitchenSinkMDX,
      // },
    },
  },
  argTypes: {
    selectableRows: {
      table: {
        category: "Selectable Rows",
      },
    },
    selectableRowsNoSelectAll: {
      table: {
        category: "Selectable Rows",
      },
    },
    selectableRowsVisibleOnly: {
      table: {
        category: "Selectable Rows",
      },
    },
    selectableRowsHighlight: {
      table: {
        category: "Selectable Rows",
      },
    },
    selectableRowsSingle: {
      table: {
        category: "Selectable Rows",
      },
    },
    expandableRows: {
      table: {
        category: "Expandable Rows",
      },
    },
    expandOnRowClicked: {
      table: {
        category: "Expandable Rows",
      },
    },
    expandOnRowDoubleClicked: {
      table: {
        category: "Expandable Rows",
      },
    },
    expandableRowsHideExpander: {
      table: {
        category: "Expandable Rows",
      },
    },
    subHeaderAlign: {
      options: [Alignment.RIGHT, Alignment.CENTER, Alignment.LEFT],
      control: { type: "select" },
    },
    direction: {
      options: [Direction.AUTO, Direction.LTR, Direction.RTL],
      control: { type: "select" },
    },
    selectableRowsRadio: {
      options: ["radio", "checkbox"],
      control: { type: "select" },
      table: {
        category: "Selectable Rows",
      },
    },
  },
};
