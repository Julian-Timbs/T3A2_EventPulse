import { useState } from "react";
import { useUserDispatch } from "../contexts/UserContext";
import { Button, TextField } from "@mui/material";

export default function SignupPage() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [showCategoryGrid, setShowCategoryGrid] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showSignupButton, setShowSignupButton] = useState(false);
  

  const { makeSignupRequest } = useUserDispatch();

  const categories = [
    "music",
    "sports",
    "community events",
    "arts & culture",
    "food & drink",
    "education",
    "health & wellness",
    "business & networking",
    "misc",
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategories((prevCategories) => {
      // Check if the category is already in the selectedCategories array
      if (prevCategories.includes(category)) {
        // If it is, remove it from the array (deselect the category)
        return prevCategories.filter((cat) => cat !== category);
      } else {
        // If it isn't, add it to the array (select the category)
        return [...prevCategories, category];
      }
    });
  };

  const handleShowCategories = () => {
    setShowCategoryGrid(true);
    toggleButton();
  };

  const toggleButton = () => {
    setShowNextButton(!showNextButton);
    setShowSignupButton(!showSignupButton);
  };

  return (
    <>
      <TextField
        id="formName"
        label="Name"
        variant="outlined"
        value={formName}
        onChange={(event) => setFormName(event.target.value)}
      />
      <TextField
        id="formEmail"
        label="Email"
        variant="outlined"
        value={formEmail}
        onChange={(event) => setFormEmail(event.target.value)}
      />
      <TextField
        id="formPassword"
        label="Password"
        variant="outlined"
        type="password"
        value={formPassword}
        onChange={(event) => setFormPassword(event.target.value)}
      />
      <TextField
        id="formLocation"
        label="Location"
        variant="outlined"
        value={formLocation}
        onChange={(event) => setFormLocation(event.target.value)}
      />
      {showNextButton && (
        <Button variant="contained" onClick={handleShowCategories}>
          Next
        </Button>
      )}

      {showCategoryGrid && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategorySelect(category)}
              style={{
                backgroundColor: selectedCategories.includes(category)
                  ? "blue"
                  : "gray",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      {showSignupButton && (
        <Button variant="contained" onClick={() => makeSignupRequest(formName, formEmail, formPassword, formLocation, categories)}>
          Sign up!
        </Button>
      )}
    </>
  );
}
