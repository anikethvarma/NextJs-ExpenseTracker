import { useState, useEffect, use } from "react";
import Add from './components/Add'
import AllData from './components/AllData'


export default function Home() {
  const [allData, setAllData] = useState([]);
  const [showAllData, setShowAllData] = useState(false);


  useEffect(() => {
    fetchAllData();
  }, [])

  const fetchAllData = async () => {
    const response = await fetch("/api/getAllData");
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setAllData(data);
      setShowAllData(true)
    } else {
      alert("Failed to fetch data!");
    }
  };

  return <><div className="header-bg">
    <h1>Expense Tracker</h1>
    <Add />
  </div>
  <AllData allData={allData}/>
  </>

}
