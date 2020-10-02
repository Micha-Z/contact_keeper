import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const grids = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "2rem",
};

const Home = () => {
  return (
    <div style={grids}>
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
