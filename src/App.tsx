import "./App.css";
import EventCard from "./components/EventCard";

function App() {
  const eventLink = "https://www.google.com";
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <EventCard
        title="Event title"
        description="Event description"
        date="2024-05-05"
        location="Serena Hotel"
        image={"/img/event.jpg"}
        link={eventLink}
      />
      <EventCard
        title="Event title"
        description="Event description"
        date="2024-05-05"
        location="Serena Hotel"
        image={"/img/event.jpg"}
        link={eventLink}
      />
      <EventCard
        title="Event title"
        description="Event description"
        date="2024-05-05"
        location="Serena Hotel"
        image={"/img/event.jpg"}
        link={eventLink}
      />
    </div>
  );
}

export default App;
