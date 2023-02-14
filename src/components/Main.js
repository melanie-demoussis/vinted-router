import secondPlan from "../assets/secondPlan.webp";

const Main = () => {
  return (
    <main>
      <div className="hero">
        <div className="second-plan">
          <img src={secondPlan} alt="dressing" />
        </div>
        <div className="first-plan">
          <h2>Prêts à faire du tri dans vos placards ?</h2>
          <button>Commencer à vendre</button>
        </div>
      </div>
    </main>
  );
};
export default Main;
