import { Button } from "./ui/button";
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {useNavigate} from "react-router-dom";
export function Userinfo() {
  async function send_user_info(){
    const response = await fetch("http://127.0.0.1:8787/api/v1/diet/diet_information",{
      method:"POST",
      headers:{
        "Authorization":`${localStorage.getItem("user_token")}`
      },
      body: JSON.stringify({
        //@ts-ignore
        age:document.getElementById("age").value,
        //@ts-ignore
        gender:document.getElementById("gender").value,
        //@ts-ignore
        weight:document.getElementById("weight").value,
        //@ts-ignore
        height:document.getElementById("height").value,
        //@ts-ignore
        allergies:document.getElementById("allergies").value,
        //@ts-ignore
        medical_condition:document.getElementById("meds").value
      })
    });
    const ans = await response.json();
    if(ans.message === true){
      navigate("/home");
    }
    else{
      navigate("/user_info");
    }
  }
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Tell Us About Yourself</CardTitle>
          <CardDescription>
            Share your details so we can better assist you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  placeholder="Enter your age"
                  type="number"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <form className="max-w-sm mx-auto">
                  <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                  <select id="gender"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </form>

              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="weight">Weight(kg)</Label>
                <Input
                    id="weight"
                    placeholder="Enter your weight (kgs)"
                    type="number"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="height">Height(cm)</Label>
                <Input
                    id="height"
                    placeholder="Enter your Height"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="meds">Medical Conditions</Label>
                <Input
                  id="meds"
                  placeholder="Any Medical Condition"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="allergies">Allergies</Label>
                <Input
                  id="allergies"
                  placeholder="If any allergies"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => {
            navigate("/user_info")
          }}>
            Cancel
          </Button>
          <Button onClick={send_user_info}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
