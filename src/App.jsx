import Form from "./components/Navbar/Form";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="relative mx-auto mt-10 w-full max-w-7xls">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></section>
        <Form />
      </main>
    </>
  );
}

export default App;
