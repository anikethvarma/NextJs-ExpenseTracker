import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useState} from 'react'


const Add = (props) => {

    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const addItem = async(e)=>{
        e.preventDefault();
        if(amount != "" && date != ""){
            const response = await fetch("/api/saveData", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount, date, description }),
              });
          
              if (response.ok) {
                alert("Data saved successfully!");
                setAmount("");
                setDate("");
                setDescription("");
              } else {
                alert("Something went wrong!");
              }
        }
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Expense Record</DialogTitle>
          
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input type="number" id="amount" value={amount} className="col-span-3" onChange={(e)=>{setAmount(e.target.value)}}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Input type='date' id="date" value={date} className="col-span-3" onChange={(e)=>{setDate(e.target.value)}}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" value={description} className="col-span-3" onChange={(e)=>{setDescription(e.target.value)}}/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={addItem}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Add;