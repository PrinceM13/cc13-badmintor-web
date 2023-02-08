import AddRow from "./AddRow";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function Table({ tableHead = [], tableBody = [], needEditColumn = true }) {
    // const tableHead = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
    // const tableBody = [
    //     ['Code Camp13', 'Row 2', 'Row 3', 'Row 4'],
    //     ['Code Camp13', 'Row 2', 'Row 3', 'Row 4'],
    //     ['Code Camp13', 'Row 2', 'Row 3', 'Row 4']
    // ];

    const isDataValid = tableHead.length !== 0 && tableHead.length !== 0;

    const table = <>
        <div className="flex flex-col gap-4">
            <AddRow />
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
                    <TableHead tableHead={tableHead} needEditColumn={needEditColumn} />
                    <TableBody tableBody={tableBody} needEditColumn={needEditColumn} />
                </table>
            </div>
        </div>
    </>

    return (
        <>
            {isDataValid && table}
        </>
    );
};