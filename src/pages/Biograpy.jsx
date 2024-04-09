import Footer from "../components/Footer";
import Header from "../components/Header";

const Biography = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h2 className="display-4 my-2">Biography</h2>
        <article>
          <p>
            Virat Kohli, born on November 5, 1988, in Delhi, India, rose to
            prominence as a talented cricketer in his early years, captaining
            the Indian U-19 cricket team to victory in the 2008 ICC U-19 Cricket
            World Cup. He made his international debut for India in 2008 and has
            since amassed numerous records, including being one of the fastest
            players to reach 10,000 runs in One Day Internationals (ODIs). Kohli
            has led India to numerous victories as captain and has earned
            accolades such as the Sir Garfield Sobers Trophy for ICC Cricketer
            of the Year multiple times. Off the field, he is known for his
            philanthropy work and advocacy for fitness and healthy living.
          </p>
          <p>
            Virat Kohli, the Indian cricket sensation, has risen to become one
            of the world's finest batsmen, inspiring millions with his
            exceptional talent and relentless pursuit of excellence.
          </p>
        </article>
      </main>
      <br/>
      <Footer />
    </>
  );
};

export default Biography;
