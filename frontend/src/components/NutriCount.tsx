import { Card,CardContent,CardDescription,CardHeader,CardTitle,} from "./ui/card.tsx";
import { Label } from "./ui/label.tsx";
import '../App.css';

export default function NutriCount() {

    return (
        <div className="flex items-center justify-end w-[250px] ">
            <Card className='w-[250px] bg-orange-200'>
                <CardHeader className="text-center">
                    <CardTitle>Nutri Count</CardTitle>
                    <CardDescription>1500 kcal</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='grid w-full gap-4'>
                        <div className='flex flex-row justify-between'>
                            <Label htmlFor="protein">100</Label>
                            <Label htmlFor="carbs">100</Label>
                            <Label htmlFor="fats">100</Label>

                        </div>


                        <div className='flex flex-row  justify-between'>
                            <Label htmlFor="protein">protein</Label>
                            <Label htmlFor="carbs">carbs</Label>
                            <Label htmlFor="fats">carbs</Label>


                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}