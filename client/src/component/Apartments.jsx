import ApartmentCard from "./ApartmentCard";
import apartments from "../data/apartments";

const Apartments = ({ showBackButton = false }) => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl text-indigo-400 font-semibold mb-8">
        Featured Apartments
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {apartments.map((apt) => (
          <ApartmentCard
            key={apt.id}
            apt={apt}
            showBackButton={showBackButton} // Pass down the prop
          />
        ))}
      </div>
    </section>
  );
};

export default Apartments;
