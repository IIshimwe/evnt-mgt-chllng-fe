import { ReactNode } from "react";

interface Props {
  title: string;
  description: ReactNode;
  date: string;
  location: string;
  image: string;
  link: string;
}

const EventCard = ({
  title,
  description,
  date,
  location,
  image,
  link,
}: Props) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{date}</p>
          <p className="card-text">{description}</p>
          <p>{location}</p>
          <a href="#" className="btn btn-primary">
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
