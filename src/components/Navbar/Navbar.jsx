const Navbar = () => {
  const navlinks = [
    { id: 1, name: "Home" },
    { id: 2, name: "App" },
    { id: 3, name: "Account" },
    { id: 4, name: "Export" },
  ];

  return (
    <nav>
      <div className="flex max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1 mt-2 border px-4 rounded-md mx-auto">
        <div>
          <img src="/favicon.svg" className="h-14" />
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-4 text-gray-500 font-medium">
            {navlinks.map((link) => (
              <li key={link.id}>{link.name}</li>
            ))}
          </ul>
        </div>

        <div className="px-6 py-2 bg-teal-600 text-white w-fit rounded-md">
          Get App
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
