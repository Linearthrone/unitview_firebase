import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to UnitView</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A comprehensive solution for hospital unit management, patient assignments, and staff coordination
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Link 
          href="/facility-setup" 
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500"
        >
          <h2 className="text-2xl font-bold mb-3 text-blue-700">Facility Setup</h2>
          <p className="text-gray-600 mb-4">
            Configure unit layouts, enable modules, and set up patient grids for your facility
          </p>
          <div className="text-blue-600 font-medium">Get Started →</div>
        </Link>

        <Link 
          href="/unitview" 
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-500"
        >
          <h2 className="text-2xl font-bold mb-3 text-green-700">UnitView</h2>
          <p className="text-gray-600 mb-4">
            View and manage patient assignments for nursing staff on specific units
          </p>
          <div className="text-green-600 font-medium">View Units →</div>
        </Link>

        <Link 
          href="/chargeview" 
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-purple-500"
        >
          <h2 className="text-2xl font-bold mb-3 text-purple-700">ChargeView</h2>
          <p className="text-gray-600 mb-4">
            Comprehensive dashboard for charge nurses to manage unit operations
          </p>
          <div className="text-purple-600 font-medium">Manage Units →</div>
        </Link>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="text-blue-600 font-bold mb-2">Unit Configuration</div>
            <p className="text-gray-600 text-sm">Create and customize unit layouts with room assignments</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="text-blue-600 font-bold mb-2">Staff Management</div>
            <p className="text-gray-600 text-sm">Assign nurses, PCTs, charge nurses, and unit clerks</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="text-blue-600 font-bold mb-2">Patient Assignments</div>
            <p className="text-gray-600 text-sm">Manage patient-to-nurse assignments with acuity tracking</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="text-blue-600 font-bold mb-2">Module System</div>
            <p className="text-gray-600 text-sm">Enable/disable features based on facility needs</p>
          </div>
        </div>
      </div>
    </div>
  );
}