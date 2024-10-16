import Form from "./components/Form";
import Navbar from "./components/Navbar";
import RightSideColumn from "./components/RightSideColumn";

function App() {
  return (
    <>
      <Navbar />
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <Form />
          {/* Right column */}
          <RightSideColumn />
        </section>
      </main>
    </>
  );
}

export default App;
