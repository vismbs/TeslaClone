import React from "react";
import Styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        backImg="model-3.jpg"
        lefBut="custom order"
        rigBut="existing inventory"
        desc="Order Online for Touchless Delivery"
      />
      <Section
        title="Model S"
        backImg="model-s.jpg"
        lefBut="custom order"
        rigBut="existing inventory"
        desc="Order Online for Touchless Delivery"
      />
      <Section
        title="Model X"
        backImg="model-x.jpg"
        lefBut="custom order"
        rigBut="existing inventory"
        desc="Order Online for Touchless Delivery"
      />
      <Section
        title="Model Y"
        backImg="model-y.jpg"
        lefBut="custom order"
        rigBut="existing inventory"
        desc="Order Online for Touchless Delivery"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        backImg="solar-panel.jpg"
        lefBut="Order Now"
        rigBut="Learn More"
        desc="Money-back guarantee"
      />
      <Section
        title="Solar for New Roofs"
        backImg="solar-roof.jpg"
        lefBut="Order Now"
        rigBut="Learn More"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
      />
      <Section
        title="Accessories"
        backImg="accessories.jpg"
        lefBut="Shop Now"
        desc=""
      />
    </Container>
  );
}

export default Home;

const Container = Styled.div`
height: 100vh;

`;
