import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table"

export  default function Tables() {
    return (
        <>
            <div className="bg-white  m-10">
                <Table className="">
                    <TableCaption className="font-bold text-xl text-green-600">Details of your Eatery</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[1px]" colSpan={10}>Food Time</TableHead>
                            <TableHead colSpan={10} className="text-left">Enter Food name</TableHead>
                            <TableHead  >Calories</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={10}>Breakfast</TableCell>
                            <TableCell colSpan={10} className="text-left"><input className="p-2 rounded-lg border-2 border-solid " type="text" id="breakfastfood" placeholder="Enter Food name"/></TableCell>
                            <TableCell className="text-left "><input className="p-2 rounded-lg border-2 border-solid" type="text" placeholder="Calories"/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={10}>Lunch</TableCell>
                            <TableCell colSpan={10} className="text-left"><input className="p-2 rounded-lg border-2 border-solid" type="text" id="lunchfood" placeholder="Enter Food name"/></TableCell>
                            <TableCell className="text-left "><input  className="p-2 rounded-lg border-2 border-solid"  type="text" placeholder="Calories"/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={10}>Dinner</TableCell>
                            <TableCell colSpan={10}><input type="text" className="p-2 rounded-lg border-2 border-solid"  id="dinnerfood" placeholder="Enter Food name"/></TableCell>
                            <TableCell className="text-left"><input className="p-2 rounded-lg border-2 border-solid" type="text" placeholder="Calories"/></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>

                            <TableCell colSpan={15}>Total</TableCell> {/* Adjust the colSpan value as needed */}
                            <TableCell className="text-right">Total calories number</TableCell>
                            <h3 id="total-calorie"></h3>

                        </TableRow>
                        <button type="submit" className="font-bold p-2 ml-[10px] bg-green-500 rounded-lg border-solid border-2 border-black" onClick={() => {/* Handle final form submission */}} aria-label="Submit all meals">Submit All</button>
                    </TableFooter>
                </Table>
            </div>

        </>
    );
}