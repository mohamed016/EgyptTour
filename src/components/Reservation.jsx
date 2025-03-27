import React, { useState, forwardRef, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/recervation.css";
import { NavLink, Outlet } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Calendar, CaretDown, Drop, MapPin, User } from "phosphor-react";


// ======================== Main Component ========================
function Reservation() {
  return (
    <div className="reservationBox">
      <div className="container">
        <NavigationTabs />
        <Outlet />
      </div>
    </div>
  );
}

// ======================== Navigation Tabs ========================

function NavigationTabs() {
  const tabs = [
    { to: ".", label: "Flights" },
    { to: "hotel-search", label: "Hotels" },
    { to: "flight-hotel-search", label: "Flight + Hotel" },
  ];

  return (
    <ul className="nav nav-underline">
      {tabs.map((tab) => (
        <li key={tab.to} className="nav-item">
          <NavLink
            to={tab.to}
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            {tab.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
// ======================== Navigation Tabs ========================

export function FlightSearch() {
  const [departingDate, setDepartingDate] = useState(new Date());
  const [returningDate, setReturningDate] = useState(new Date());
  const [showDropdown, setShowDropdown] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [travelClass, setTravelClass] = useState("Economy");

  const totalTravelers =
    travelers.adults + travelers.children + travelers.infants;

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <div className="row mt-4">
      <LocationInput
        id="LeavingFrom"
        label="Leaving From"
        placeholder="Enter departure city"
      />
      <LocationInput
        id="Goingto"
        label="Going To"
        placeholder="Enter destination city"
      />

      <DateInput
        label="Departing"
        selectedDate={departingDate}
        setSelectedDate={setDepartingDate}
      />
      <DateInput
        label="Returning"
        selectedDate={returningDate}
        setSelectedDate={setReturningDate}
      />

      <div className="col-md-4 col-lg-2 col-8">
        <label className="form-label">Travellers & Class</label>
        <div className="position-relative">
          <div className="d-flex justify-content-between align-items-center form-control">
            <User size={20} />
            <p className="mb-0">
              {totalTravelers} traveler{totalTravelers > 1 ? "s" : ""},{" "}
              {travelClass}
            </p>
            <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
              <CaretDown size={20} />
            </span>
          </div>

          {showDropdown && (
            <TravelersDropdown
              travelers={travelers}
              setTravelers={setTravelers}
              travelClass={travelClass}
              setTravelClass={setTravelClass}
              closeDropdown={() => setShowDropdown(false)}
            />
          )}
        </div>
      </div>
      <SearchButton />
    </div>
  );
}

function LocationInput({ id, label, placeholder }) {
  return (
    <div className="col-md-2 col-lg-2 col-6 mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div className="input-group">
        <input
          type="text"
          id={id}
          className="form-control"
          placeholder={placeholder}
        />
        <span className="input-group-text" style={{ cursor: "pointer" }}>
          <MapPin size={20} weight="bold" />
        </span>
      </div>
    </div>
  );
}

function DateInput({ label, selectedDate, setSelectedDate }) {
  return (
    <div className="col-md-3 col-lg-2 col-6 mb-3">
      <label className="form-label">{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy/MM/dd, EEEE"
        minDate={new Date()}
        customInput={<CustomDateInput />}
      />
    </div>
  );
}

const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
  <div className="input-group">
    <input
      type="text"
      className="form-control"
      onClick={onClick}
      value={value}
      readOnly
      ref={ref}
      placeholder="Select date"
    />
    <span
      className="input-group-text"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <Calendar size={20} weight="bold" />
    </span>
  </div>
));

function TravelersDropdown({
  travelers,
  setTravelers,
  travelClass,
  setTravelClass,
  closeDropdown,
}) {
  const handleChange = (type, value) => {
    setTravelers((prev) => ({ ...prev, [type]: Number(value) }));
  };

  return (
    <div className="dropdownTraveller">
      <ul className="listSearch">
        <li>
          <hr />
        </li>

        <RepeatList
          label="Adults"
          validation="12+"
          min={1}
          max={9}
          value={travelers.adults}
          onChange={(val) => handleChange("adults", val)}
        />
        <RepeatList
          label="Children"
          validation="2-11"
          min={0}
          max={9}
          value={travelers.children}
          onChange={(val) => handleChange("children", val)}
        />
        <RepeatList
          label="Infants"
          validation="0-2"
          min={0}
          max={travelers.adults}
          value={travelers.infants}
          onChange={(val) => handleChange("infants", val)}
        />

        <li>
          <hr />
        </li>
        <li className="d-flex justify-content-between align-items-center">
          <span>Class</span>
          <select
            onChange={(e) => setTravelClass(e.target.value)}
            value={travelClass}
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First</option>
          </select>
        </li>
        <li>
          <hr />
        </li>
        <li className="d-flex justify-content-end align-items-center">
          <button
            className="btn btn-warning"
            style={{ color: "white" }}
            onClick={closeDropdown}
          >
            Done
          </button>
        </li>
      </ul>
    </div>
  );
}

function RepeatList({ label, validation, min, max, value, onChange }) {
  return (
    <li
      className="list-styled d-flex justify-content-between align-items-center"
      style={{ marginBlock: "2px" }}
    >
      <span>{label}</span>
      <select
        className="w-25"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {Array.from({ length: max - min + 1 }, (_, i) => min + i).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <span>({validation})</span>
    </li>
  );
}

function SearchButton() {
  return (
    <div className="col-md-3 col-lg-1 col-4">
      <div className="searchbox">
        <button className="btn btn-warning">Search</button>
      </div>
    </div>
  );
}

// ======================== Hotel Tabs ========================
function HotelSearch() {
  const [departingDate, setDepartingDate] = useState(new Date());
  const [returningDate, setReturningDate] = useState(new Date());

  return (
    <div className="row mt-4">
      <LocationHotelInput
        id="Location"
        label="Location"
        placeholder="Enter city, Hotel name"
      />
      <DateInput
        label="Check-in"
        selectedDate={departingDate}
        setSelectedDate={setDepartingDate}
      />
      <DateInput
        label={"Check-out"}
        selectedDate={returningDate}
        setSelectedDate={setReturningDate}
      />
      <RoomsGuest />
      <SearchButton />
    </div>
  );
}
// ======================== LocationHotelInput ========================
function LocationHotelInput({ id, label, placeholder }) {
  return (
    <div className="col-md-3 col-lg-2 col-6 mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div className="input-group">
        <input
          type="text"
          id={id}
          className="form-control"
          placeholder={placeholder}
        />
        <span className="input-group-text" style={{ cursor: "pointer" }}>
          <MapPin size={20} weight="bold" />
        </span>
      </div>
    </div>
  );
}
// ======================== RoomsGuest ========================
function RoomsGuest() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [rooms, setRooms] = useState([
    { adults: 1, children: 0, childrenAges: [] },
  ]);

  const totalTravelers = rooms.reduce(
    (acc, room) => {
      acc.adults += room.adults;
      acc.children += room.children;
      return acc;
    },
    { adults: 0, children: 0 }
  );

  const totalCount = totalTravelers.adults + totalTravelers.children;

  return (
    <div className="col-md-3 col-lg-3 col-6 mb-3">
      <label className="form-label">Rooms & Guests</label>
      <div className="position-relative">
        <div className="d-flex justify-content-between align-items-center form-control">
          <User size={20} />
          <p className="mb-0">
            {rooms.length} Room{rooms.length > 1 ? "s" : ""}, {totalCount} Guest
            {totalCount > 1 ? "s" : ""}
          </p>
          <span
            onClick={() => setShowDropdown(!showDropdown)}
            style={{ cursor: "pointer" }}
          >
            <CaretDown size={20} />
          </span>
        </div>

        {showDropdown && (
          <DrobDownHotel
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            rooms={rooms}
            setRooms={setRooms}
          />
        )}
      </div>
    </div>
  );
}

// ======================== DrobDownHotel ========================

function DrobDownHotel({ showDropdown, setShowDropdown, rooms, setRooms }) {
  const handleRoomsChange = (e) => {
    const count = Number(e.target.value);
    const updatedRooms = Array.from(
      { length: count },
      (_, i) => rooms[i] || { adults: 1, children: 0, childrenAges: [] }
    );
    setRooms(updatedRooms);
  };

  const handleAdultsChange = (index, value) => {
    const updated = [...rooms];
    updated[index].adults = Number(value);
    setRooms(updated);
  };

  const handleChildrenChange = (index, value) => {
    const updated = [...rooms];
    const childrenCount = Number(value);
    updated[index].children = childrenCount;
    updated[index].childrenAges = Array.from(
      { length: childrenCount },
      (_, i) => updated[index].childrenAges[i] || 1
    );
    setRooms(updated);
  };

  const handleChildAgeChange = (roomIndex, childIndex, value) => {
    const updated = [...rooms];
    updated[roomIndex].childrenAges[childIndex] = Number(value);
    setRooms(updated);
  };

  return (
    <div className="dropdownHotel danger">
      <ul className="dropdownMenu">
        <li>
          <span>How many rooms:</span>
          <select onChange={handleRoomsChange} value={rooms.length}>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </li>

        {rooms.map((room, i) => (
          <React.Fragment key={i}>
            <li>
              <span>Room {i + 1}</span>
              <div>
                <ul className="roomList">
                  <li>
                    <span>Adults</span>
                    <select
                      value={room.adults}
                      onChange={(e) => handleAdultsChange(i, e.target.value)}
                    >
                      {Array.from({ length: 6 }).map((_, j) => (
                        <option key={j} value={j + 1}>
                          {j + 1}
                        </option>
                      ))}
                    </select>
                    <span>(12+ yrs)</span>
                  </li>
                  <li>
                    <span>Children</span>
                    <select
                      value={room.children}
                      onChange={(e) => handleChildrenChange(i, e.target.value)}
                    >
                      {Array.from({ length: 6 }).map((_, j) => (
                        <option key={j} value={j}>
                          {j}
                        </option>
                      ))}
                    </select>
                    <span>(2-12)</span>
                  </li>
                </ul>
              </div>
            </li>

            {room.children > 0 && (
              <li>
                <span className="d-block mb-2">Specify Children ages</span>
                <div className="selectionBox">
                  {room.childrenAges.map((age, j) => (
                    <select
                      key={j}
                      value={age}
                      onChange={(e) =>
                        handleChildAgeChange(i, j, e.target.value)
                      }
                    >
                      {Array.from({ length: 12 }).map((_, k) => (
                        <option key={k} value={k + 1}>
                          {k + 1}
                        </option>
                      ))}
                    </select>
                  ))}
                </div>
              </li>
            )}
            <li>
              <hr />
            </li>
          </React.Fragment>
        ))}

        <li className="d-flex justify-content-end">
          <button
            className="btn btn-warning"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Done
          </button>
        </li>
      </ul>
    </div>
  );
}
// import React, { useState, useEffect } from "react";
// import { CaretDown } from "phosphor-react";

function FlightHotelSearch() {
  const [departingDate, setDepartingDate] = useState(new Date());
  const [returningDate, setReturningDate] = useState(new Date());

  return (
    <div className="row">
      {["Location", "Leaving From", "Going To"].map((label, index) => (
        <LocationInput
          key={index}
          id={label.replace(/\s+/g, "")}
          label={label}
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      ))}
      <DateInput
        label="Returning"
        selectedDate={returningDate}
        setSelectedDate={setReturningDate}
      />
      <DateInput
        label="Departing"
        selectedDate={departingDate}
        setSelectedDate={setDepartingDate}
      />
      <TotalTraveler />
      <SearchButton/>
    </div>
  );
}

// ======================== TotalTraveler Component ========================
function TotalTraveler() {
  const [classType, setClassType] = useState("Economy");
  const [rooms, setRooms] = useState([
    { adults: 1, childrenNumber: 0, childrenAge: [], infants: 0 },
  ]);
  const [showDropdown, setShowDropdown] = useState(false); 

  // ✅ حساب إجمالي عدد المسافرين
  const totalTravelers = rooms.reduce(
    (total, room) => total + room.adults + room.childrenNumber + room.infants,
    0
  );

  return (
    <div className="col-md-4 col-lg-2 col-8">
      <label className="form-label">Travellers & Class</label>
      <div className="position-relative">
        <div
          className="d-flex justify-content-between align-items-center form-control"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <User size={20} />
          <p className="mb-0">{totalTravelers} Traveler(s)</p>
          <CaretDown size={20} />
        </div>

        {showDropdown && (
          <DropdownTotalTraveler
            classType={classType}
            setClassType={setClassType}
            rooms={rooms}
            setRooms={setRooms}
            setShowDropdown={setShowDropdown}
          />
        )}
      </div>
    </div>
  );
}

// ======================== DropdownTotalTraveler Component ========================
function DropdownTotalTraveler({
  classType,
  setClassType,
  rooms,
  setRooms,
  setShowDropdown,
}) {
  useEffect(() => {
    console.log("Updated Rooms Data:", JSON.stringify(rooms, null, 2));
  }, [rooms]);

  const handleRoomChange = (e) => {
    const roomCount = parseInt(e.target.value);
    const updatedRooms = Array.from(
      { length: roomCount },
      (_, i) =>
        rooms[i] || {
          adults: 1,
          childrenNumber: 0,
          childrenAge: [],
          infants: 0,
        }
    );
    setRooms(updatedRooms);
  };

  const handleFieldChange = (e, roomIndex, field) => {
    const value = parseInt(e.target.value);
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex][field] = value;

    if (field === "childrenNumber") {
      updatedRooms[roomIndex].childrenAge = Array(value).fill(2); 
    }

    setRooms(updatedRooms);
  };

  const handleChildAgeChange = (e, roomIndex, childIndex) => {
    const value = parseInt(e.target.value);
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex].childrenAge[childIndex] = value;
    setRooms(updatedRooms);
  };

  return (
    <div className="bg-white  hotelFlightSearch p-3">
      <ul>
        <li>
          <span>Class:</span>
          <select
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
          >
            {["Economy", "Business", "First"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </li>

        <li>
          <span>Rooms:</span>
          <select value={rooms.length} onChange={handleRoomChange}>
            {[...Array(9)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </li>

        {rooms.map((room, roomIndex) => (
          <li className="room" key={roomIndex}>
            <span>Room {roomIndex + 1}</span>
            <ul>
              <li>
                <span>Adults (12+ yrs)</span>
                <select
                  value={room.adults}
                  onChange={(e) => handleFieldChange(e, roomIndex, "adults")}
                >
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </li>

              <li>
                <span>Children (2-12 yrs)</span>
                <select
                  value={room.childrenNumber}
                  onChange={(e) =>
                    handleFieldChange(e, roomIndex, "childrenNumber")
                  }
                >
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </li>

              {room.childrenNumber > 0 && (
                <li>
                  <span>Children Age:</span>
                  {room.childrenAge.map((age, childIndex) => (
                    <select
                      key={childIndex}
                      value={age}
                      onChange={(e) =>
                        handleChildAgeChange(e, roomIndex, childIndex)
                      }
                    >
                      {[...Array(11)].map((_, i) => (
                        <option key={i} value={i + 2}>
                          {i + 2}
                        </option>
                      ))}
                    </select>
                  ))}
                </li>
              )}

              <li>
                <span>Infants (0-2 yrs)</span>
                <select
                  value={room.infants}
                  onChange={(e) => handleFieldChange(e, roomIndex, "infants")}
                >
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
          </li>
        ))}

        <li className="d-flex justify-content-end">
          <button
            className="btn btn-warning"
            onClick={() => setShowDropdown(false)}
          >
            Done
          </button>
        </li>
      </ul>
    </div>
  );
}

// export default FlightHotelSearch; // Removed to avoid multiple default exports

function Activities() {
  return <h1>Activities Search</h1>;
}

// ======================== Export ========================
export { HotelSearch, FlightHotelSearch };
export default Reservation;
