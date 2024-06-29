import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {Select, SelectContent,SelectItem, SelectTrigger, SelectValue,} from "./ui/select";

export function Userinfo() {
  const initialState = {
    age: "",
    gender: "",
    weight: "",
    height: "",
    meds: "",
    allergies: "",
  };

  const [formState, setFormState] = React.useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const resetForm = () => {
    setFormState(initialState);
  };
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
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
                  value={formState.age}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={formState.gender}
                  onValueChange={(value) => handleSelectChange("gender", value)}
                >
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="weight">Weight</Label>
                <Input
                  id="weight"
                  placeholder="Enter your weight (kgs)"
                  type="number"
                  value={formState.weight}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  placeholder="Enter your Height"
                  value={formState.height}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="meds">Medical Conditions</Label>
                <Input
                  id="meds"
                  placeholder="Any Medical Condition"
                  value={formState.meds}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="allergies">Allergies</Label>
                <Input
                  id="allergies"
                  placeholder="If any allergies"
                  value={formState.allergies}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={resetForm}>
            Cancel
          </Button>
          <Button onClick={goToHome}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
