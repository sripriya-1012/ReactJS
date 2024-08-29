import { Container } from "@mui/material";
import { useRef, useState } from "react";

const AboutPage = () => {
  const [name, setName] = useState("");// form with controlled components
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);//to display the characters typed in box in console, its read only
    setName(event.target.value);// to display in box as its being typed with onchange
  };

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);// uncontrolled component
    console.log(searchInputRef.current?.value);// doesnot use react. Single field like search, we use uncontrolled
    
  };

  return (
    <Container>
      <h1>About Page</h1>
      <p>Controlled Components - Demo</p>
      <div>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>

      <p>Uncontrolled Components - Demo</p>
      <div>
        <input
          type="text"
          placeholder="Search Query"
          ref={searchInputRef}
          onChange={handleSearchQueryChange}
        />
      </div>
    </Container>
  );
};

export default AboutPage;