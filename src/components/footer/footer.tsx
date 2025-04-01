export default function Footer() {
  return (
    <footer className=" border-t border-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Sirat. Crafted with ❤️.
        </p>
      </div>
    </footer>
  );
}
