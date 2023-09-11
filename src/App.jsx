import { useState } from "react";
import AgeCalculatorForm from "./components/AgeCalculatorForm";
import AgeResult from "./components/AgeResult";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj) % 12;
    const ageDays = differenceInDays(
      today,
      new Date(today.getFullYear(), today.getMonth(), birthDateObj.getDate())
    );

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };

  return (
    <section className="bg-black dark:bg-zinc-900">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white mb-6">Age Calculator</h1>
        <p className="text-lg mb-9 text-white">
          See how many years closer to death you are!
        </p>
        <AgeCalculatorForm calculateAge={calculateAge} />
        {age && <AgeResult age={age} />}
      </div>
    </section>
  );
}

export default App;
