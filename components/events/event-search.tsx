import React, { useRef } from "react";

type EventSearchProps = {
  onSearch: (year: string, month: string) => void;
}

function EventSearch(props: EventSearchProps) {
  const yearInputRef = useRef(null);
  const monthInputRef = useRef(null);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (yearInputRef.current && monthInputRef.current) {
      const selectedYear = (yearInputRef.current as HTMLSelectElement).value;
      const selectedMonth = (monthInputRef.current as HTMLSelectElement).value;

      props.onSearch(selectedYear, selectedMonth)
    }
  }
  return (
    <form
      className="bg-blue-100 p-3 mx-10 max-w-2xl md:mx-auto"
      onSubmit={submitHandler}
    >
      <div className="bg-white flex space-x-1 justify-between items-center pl-2">
        <div className="">
          <label className="mr-2">Year:</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div>
          <label>Month:</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <button
          type="submit"
          className=" mx-auto text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300  font-extralight rounded-lg sm:text-lg px-5 py-1 text-center"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default EventSearch;
