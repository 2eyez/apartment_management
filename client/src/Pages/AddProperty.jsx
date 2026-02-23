const AddProperty = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== "owner") {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          Access Denied
        </h2>
        <p className="mt-2 text-gray-600">
          Only property owners can upload properties.
        </p>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Upload Property
      </h1>

      <form className="space-y-4 max-w-lg">
        <input
          type="text"
          placeholder="Property Title"
          className="w-full border rounded-lg px-4 py-2"
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full border rounded-lg px-4 py-2"
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border rounded-lg px-4 py-2"
        />

        <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
