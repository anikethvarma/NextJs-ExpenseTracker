import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

  
const AllData = (props) => {
    const {allData} = props;

    return (
      <Table className="data-bg">
        <TableCaption>A list of your transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Description</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allData.map((eachElement) => (
            <TableRow key={eachElement.id}>
              <TableCell className="font-medium">{eachElement.description}</TableCell>
              <TableCell>{eachElement.date}</TableCell>
              <TableCell className="text-right">{eachElement.amount}</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">0</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  
  export default AllData