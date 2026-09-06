import React, { useState } from "react";

const AppointmentForm = ({
  date,
  onSubmit,
  onCancel,
}) => {
  const [arrivalTime, setArrivalTime] = useState("");
  const [service, setService] = useState("full-king");
  const [note, setNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!arrivalTime) {
      return;
    }

    const appointment = {
      id: crypto.randomUUID(),
      date,
      arrivalTime,
      service,
      note,
    };

    onSubmit(appointment);
  };

  return (
    <div className="appointment-form">

      <div className="form-header">
        <h3>Book Your Appointment</h3>

        <span>{date}</span>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="arrival-time">
            Arrival Time
          </label>

          <input
            id="arrival-time"
            type="time"
            value={arrivalTime}
            onChange={(event) =>
              setArrivalTime(event.target.value)
            }
            required
          />
        </div>

        <fieldset className="service-options">

          <legend>Choose Your Treatment</legend>

          <label
            className={
              service === "exterior"
                ? "service-option active"
                : "service-option"
            }
          >
            <input
              type="radio"
              name="service"
              value="exterior"
              checked={service === "exterior"}
              onChange={() =>
                setService("exterior")
              }
            />

            <span>Exterior</span>
          </label>

          <label
            className={
              service === "interior"
                ? "service-option active"
                : "service-option"
            }
          >
            <input
              type="radio"
              name="service"
              value="interior"
              checked={service === "interior"}
              onChange={() =>
                setService("interior")
              }
            />

            <span>Interior</span>
          </label>

          <label
            className={
              service === "full-king"
                ? "service-option active"
                : "service-option"
            }
          >
            <input
              type="radio"
              name="service"
              value="full-king"
              checked={service === "full-king"}
              onChange={() =>
                setService("full-king")
              }
            />

            <span>Full King Treatment</span>
          </label>

        </fieldset>

        <div className="form-group">

          <label htmlFor="appointment-note">
            Notes
          </label>

          <textarea
            id="appointment-note"
            value={note}
            onChange={(event) =>
              setNote(event.target.value)
            }
            placeholder="Anything we should know about the vehicle?"
            rows="4"
          />

        </div>

        <div className="appointment-actions">

          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="book-button"
          >
            Book Appointment
          </button>

        </div>

      </form>
    </div>
  );
};

export default AppointmentForm;
