"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
// No additional code is needed at $PLACEHOLDER$ since the fetchdata function already fetches data from the API.
// If you want to display the fetched data, you can use state to store and render it.


export default function LabelDemo() {
  const [data, setData] = useState(null);

  const fetchdata = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData); // Store the fetched data in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div className="">
        <p>aa</p>
        <Button onClick={fetchdata}>sum</Button>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>} {/* Display the fetched data */}
      </div>
    </div>
  );
}