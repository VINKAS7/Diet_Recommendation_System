import React, { useState } from "react";
import { Button } from "./ui/button.tsx";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card.tsx";
import { Label } from "./ui/label.tsx";
//@ts-ignore
import {Select} from "./Select.tsx";

const Activity = () => {
    const [activityLevel, setActivityLevel] = useState("Little/no exercise");
    const [mealLevel, setMealLevel] = useState("3");
    const [selectedGoal, setSelectedGoal] = useState("");

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        switch (value) {
            case 0:
                setActivityLevel("Little/no exercise");
                break;
            case 1:
                setActivityLevel("Light exercise");
                break;
            case 2:
                setActivityLevel("Moderate exercise (3-5 days/wk)");
                break;
            case 3:
                setActivityLevel("Very active (6-7 days/wk)");
                break;
            case 4:
                setActivityLevel("Extra active (very active and physical job)");
                break;
            default:
                setActivityLevel("Little/no exercise");
                break;
        }
    };

    const handleMealRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        switch (value) {
            case 0:
                setMealLevel("3");
                break;
            case 1:
                setMealLevel("4");
                break;
            case 2:
                setMealLevel("5");
                break;
            default:
                setMealLevel("3");
                break;
        }
    };

    const handleGoalChange = (value: string) => {
        setSelectedGoal(value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            activityLevel,
            mealLevel,
            selectedGoal,
        };

        try {
            const response = await fetch("https://api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to generate recommendation");
            }

        } catch (error) {
            console.error("Error generating recommendation:", error);
        }
    };

    return (
        <div className="flex">
            <div className="max-w-md w-full p-8 ">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Generate Recommendation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="grid w-full items-center gap-4">
                                <div className="mt-4">
                                    <label
                                        htmlFor="activity-range"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Activity Level
                                    </label>
                                    <p
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        id="activity-level"
                                    >
                                        {activityLevel}
                                    </p>
                                    <input
                                        id="activity-range"
                                        type="range"
                                        min={0}
                                        max={4}
                                        step={1}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                        onChange={handleRangeChange}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="goal">Choose Health Goal</Label>
                                    <Select value={selectedGoal} onChange={handleGoalChange}>
                                        <option value="maintain">Maintain Weight</option>
                                        <option value="avg">Weight loss</option>
                                        <option value="extreme">Extreme weight loss</option>
                                        <option value="mild">Mild weight loss</option>
                                    </Select>
                                </div>
                                <div className="mt-4">
                                    <label
                                        htmlFor="meal-range"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Number of Meals
                                    </label>
                                    <p
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        id="meal-level"
                                    >
                                        {mealLevel}
                                    </p>
                                    <input
                                        id="meal-range"
                                        type="range"
                                        min={0}
                                        max={2}
                                        step={1}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                        onChange={handleMealRangeChange}
                                    />
                                </div>
                            </div>
                            <CardFooter className="flex justify-between mt-4">
                                <Button type="submit">Generate</Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Activity;