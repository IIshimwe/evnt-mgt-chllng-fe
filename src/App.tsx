import "./App.css";
import EventCard from "./components/EventCard";

function App() {
  const eventLink = "https://www.google.com";
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <EventCard
        title="Event title"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis
        tempore numquam ab doloribus, non voluptatem ipsam odit fugiat sapiente..."
        date="2024-05-05"
        location="Serena Hotel"
        image={
          "https://images.pexels.com/photos/15475219/pexels-photo-15475219/free-photo-of-hill-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        link={eventLink}
      />

      <EventCard
        title="Event title"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis
        tempore numquam ab doloribus, non voluptatem ipsam odit fugiat sapiente..."
        date="2024-05-05"
        location="Serena Hotel"
        image={
          "https://images.pexels.com/photos/19882695/pexels-photo-19882695/free-photo-of-concrete-breakers-on-the-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        link={eventLink}
      />
      <EventCard
        title="Event title"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis
        tempore numquam ab doloribus, non voluptatem ipsam odit fugiat sapiente..."
        date="2024-05-05"
        location="Serena Hotel"
        image={
          "https://images.pexels.com/photos/22880134/pexels-photo-22880134/free-photo-of-a-woman-in-a-hijab-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        link={eventLink}
      />
    </div>
  );
}

export default App;
