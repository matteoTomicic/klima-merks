import { Table, Td, Th, Tr } from "./styles";

export interface IPriceListTable {
	tableBodyRows: {
		key: number;
		serviceLabel: string;
		serviceNumber: number;
		servicePrice: string;
	}[];
	tableHeadColumns: {
		key: number;
		label: string;
	}[];
}

function PriceListTable({ tableBodyRows, tableHeadColumns }: IPriceListTable) {
	return (
		<Table>
			<thead>
				<Tr>
					{tableHeadColumns.map((headColumn) => (
						<Th key={headColumn.key}>{headColumn.label}</Th>
					))}
				</Tr>
			</thead>
			<tbody>
				{tableBodyRows.map((row) => (
					<Tr key={row.key}>
						<Td>{row.serviceNumber}</Td>
						<Td>{row.serviceLabel}</Td>
						<Td>{row.servicePrice}</Td>
					</Tr>
				))}
			</tbody>
		</Table>
	);
}

export default PriceListTable;
