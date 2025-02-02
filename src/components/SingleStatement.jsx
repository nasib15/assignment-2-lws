import { DeleteSVG, EditSVG } from "./SVG";

const SingleStatement = ({
  id,
  tab,
  category,
  date,
  income = 0,
  expense = 0,
  onDelete,
  onEdit,
}) => {
  const confirmDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      onDelete(id, tab);
    }
  };

  return (
    <div className="flex justify-between items-center py-2 relative group cursor-pointer">
      <div>
        <h3 className="text-base font-medium leading-7 text-gray-600">
          {category}
        </h3>
        <p className="text-xs text-gray-600">
          {new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
          BDT {tab === "income" ? income : expense}
        </p>

        <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
          <button
            className="hover:text-teal-600 mr-1"
            role="button"
            title="Edit Button"
            onClick={() => onEdit(id, tab)}
          >
            <EditSVG />
          </button>

          <button
            className="hover:text-red-600"
            role="button"
            title="Delete"
            onClick={confirmDelete}
          >
            <DeleteSVG />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SingleStatement;
