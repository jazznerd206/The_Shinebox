import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";
import "./DetailingCalendar.css";

const DetailingCalendar = ({ onAppointmentBooked }) => {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  // First day of the month
  const firstDay = new Date(year, month, 1).getDay();

  // Number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [];

  // Empty cells before the first day
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  // Actual days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const previousMonth = () => {
    setCurrentMonth(
      new Date(year, month - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(year, month + 1, 1)
    );
  };

  const goToToday = () => {
    setCurrentMonth(
      new Date(today.getFullYear(), today.getMonth(), 1)
    );
  };

  const formatDate = (day) => {
    const monthNumber = String(month + 1).padStart(2, "0");
    const dayNumber = String(day).padStart(2, "0");

    return `${year}-${monthNumber}-${dayNumber}`;
  };

  const isToday = (day) => {
    if (!day) return false;

    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const handleDateClick = (day) => {
    if (!day) return;

    setSelectedDate(formatDate(day));
  };

  const handleBookAppointment = (appointment) => {
    setAppointments((current) => [
      ...current,
      appointment,
    ]);

    if (onAppointmentBooked) {
      onAppointmentBooked(appointment);
    }

    setSelectedDate(null);
  };

  const handleCancel = () => {
    setSelectedDate(null);
  };

  const getAppointmentsForDate = (date) => {
    return appointments.filter(
      (appointment) => appointment.date === date
    );
  };

  return (
    <div className="detailing-calendar">

      <div className="calendar-header">
        <div>
          <h2>Detailing Appointments</h2>
          <p>
            Select a date to schedule your appointment.
          </p>
        </div>

        <button
          className="today-button"
          onClick={goToToday}
        >
          Today
        </button>
      </div>

      <div className="calendar-navigation">

        <button
          className="nav-button"
          onClick={previousMonth}
        >
          ‹
        </button>

        <h3>
          {monthNames[month]} {year}
        </h3>

        <button
          className="nav-button"
          onClick={nextMonth}
        >
          ›
        </button>

      </div>

      <div className="calendar-grid">

        {dayNames.map((day) => (
          <div
            key={day}
            className="calendar-day-name"
          >
            {day.substring(0, 3)}
          </div>
        ))}

        {calendarDays.map((day, index) => {

          if (!day) {
            return (
              <div
                key={`empty-${index}`}
                className="calendar-cell empty"
              />
            );
          }

          const date = formatDate(day);
          const dayAppointments =
            getAppointmentsForDate(date);

          return (
            <button
              key={day}
              className={`calendar-cell ${
                isToday(day)
                  ? "today"
                  : ""
              } ${
                selectedDate === date
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleDateClick(day)}
            >
              <span className="calendar-date">
                {day}
              </span>

              {dayAppointments.length > 0 && (
                <div className="appointment-indicator">

                  <span className="appointment-dot" />

                  <span>
                    {dayAppointments.length}{" "}
                    {dayAppointments.length === 1
                      ? "appointment"
                      : "appointments"}
                  </span>

                </div>
              )}

            </button>
          );
        })}

      </div>

      <div className="calendar-legend">
        <span>
          <span className="legend-dot" />
          Booked
        </span>

        <span>
          <span className="legend-ring" />
          Today
        </span>
      </div>

      {selectedDate && (
        <AppointmentForm
          date={selectedDate}
          onSubmit={handleBookAppointment}
          onCancel={handleCancel}
        />
      )}

      {appointments.length > 0 && (
        <div className="appointment-summary">

          <h3>Upcoming Appointments</h3>

          {appointments.map((appointment) => (
            <div
              className="appointment-card"
              key={appointment.id}
            >
              <div className="appointment-date">
                {appointment.date}
              </div>

              <div className="appointment-details">
                <strong>
                  {appointment.arrivalTime}
                </strong>

                <span>
                  {appointment.service}
                </span>

                {appointment.note && (
                  <p>{appointment.note}</p>
                )}
              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default DetailingCalendar;