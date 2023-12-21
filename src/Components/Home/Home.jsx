import Container from "../../Shared/Container";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";

const Home = () => {
  return (
    <>
      <Container>
        <div className="lg:ml-4">
          <Banner />
          <Feature />
        </div>
      </Container>
    </>
  );
};

export default Home;
