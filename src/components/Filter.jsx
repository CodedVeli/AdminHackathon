import { useState } from 'react';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [status, setStatus] = useState({
    all: false,
    active: false,
    upcoming: false,
    past: false,
  });

  const [level, setLevel] = useState({
    easy: false,
    medium: false,
    hard: false,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusChange = (e) => {
    setStatus({
      ...status,
      [e.target.name]: e.target.checked,
    });
  };

  const handleLevelChange = (e) => {
    setLevel({
      ...level,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="relative w-36 bg-white border rounded-md shadow-md p-4">
      {/* Overlay for backdrop blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25  z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Filter Title */}
      <div
        className="flex justify-between items-center cursor-pointer z-20 relative"
        onClick={toggleMenu}
      >
        <h2 className="text-lg font-semibold">Filter</h2>
        <span>{isOpen ? '▴' : '▾'}</span>
      </div>

      {/* Filter Options */}
      {isOpen && (
        <div className="mt-4 space-y-4 absolute right-0.5 bg-white p-5 z-20 shadow-lg">
          {/* Status Section */}
          <div>
            <h3 className="text-md font-medium">Status</h3>
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="all"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={status.all}
                  onChange={handleStatusChange}
                />
                <span className="ml-2 text-gray-700">All</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="active"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={status.active}
                  onChange={handleStatusChange}
                />
                <span className="ml-2 text-gray-700">Active</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="upcoming"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={status.upcoming}
                  onChange={handleStatusChange}
                />
                <span className="ml-2 text-gray-700">Upcoming</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="past"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={status.past}
                  onChange={handleStatusChange}
                />
                <span className="ml-2 text-gray-700">Past</span>
              </label>
            </div>
          </div>

          {/* Level Section */}
          <div>
            <h3 className="text-md font-medium">Level</h3>
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="easy"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={level.easy}
                  onChange={handleLevelChange}
                />
                <span className="ml-2 text-gray-700">Easy</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="medium"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={level.medium}
                  onChange={handleLevelChange}
                />
                <span className="ml-2 text-gray-700">Medium</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="hard"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={level.hard}
                  onChange={handleLevelChange}
                />
                <span className="ml-2 text-gray-700">Hard</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
