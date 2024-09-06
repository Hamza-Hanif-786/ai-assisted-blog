// Page Component
// This is a functional component that returns a styled div element containing the text "About"

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">About</h1>
        <p className="text-center text-gray-600">
          This is the About page. Here you can add some information about yourself or your project.
        </p>
      </div>
    </div>
  );
};

export default Page;