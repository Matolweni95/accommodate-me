import { useState } from "react";
import { Link } from "react-router-dom";

const dataArray = Array.from({ length: 20 }, (_, index) => ({ id: index + 1, content: `Item ${index + 1}` }));




const Issues = () => {
    const [issue, setIssue] = useState([
        {subject: "Broken window", name: "Cynthia Dladla", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Broken window", name: "Thandazo Dladla", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Broken window", name: "Letty Dladla", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Broken window", name: "Cynthia Dladla", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Broken window", name: "Cynthia Dladla", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Broken window", name: "Cynthia Dladla", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Broken window", name: "Cynthia Dladla", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Broken window", name: "Cynthia Dladla", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Broken window", name: "Cynthia Dladla", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Broken window", name: "Cynthia Dladla", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
    ]);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editedItem, setEditedItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showMore, setShowMore] = useState(false);

    const handleMoreClick = (item) => {
      setSelectedItem(item);
    };
  

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6; 
    const totalPages = Math.ceil(issue.length / pageSize);

    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    const currentPageData = issue.slice(startIdx, endIdx);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handleEditClick = (item) => {
        setEditedItem(item);
        setSelectedItem(null);
    };

    const handleEditFormClose = () => {
        setShowEditForm(false);
        setEditedItem(null);
        setSelectedItem(null);
    };

    const handleEditFormSubmit = (editedData) => {
        // Update your array with the edited data
        // ...

        // Close the edit form
        handleEditFormClose();
    };

    const renderContent = (content) => {
        if (!showMore) {
          const words = content.split(" ");
          const shortenedContent = words.slice(0, 20).join(" ");
          return shortenedContent + " ...";
        }
        return content;
      };
    

    return (
        <div>
        <div>
           <Link to={'res'}> <button className="bg-transparent border border-lightblue py-1 px-2 rounded w-[200px] m-[20px] ">Add</button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 ">
        {currentPageData.map((item, i) => (
          <div key={i} className="bg-white border-2 border-lightgray  rounded-md h-[270px]">
            <h1 className="m-[10px]">{item.subject}</h1>
            <h1 className="ml-[10px] pb-[10px]">{item.name}</h1>
            <p className="ml-[10px] pb-[10px]">{item.date}</p>
            <p className="ml-[10px] pb-[20px]">{renderContent(item.issue)}</p>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 ">
            <button onClick={() => handleEditClick(item)} className="bg-lightblue w-[150px] m-[10px]">
              Edit
            </button>
            <button onClick={() => handleMoreClick(item)} className="bg-red w-[150px] m-[10px] float-end">
              More
            </button>
            </div>
          </div>
        ))}
      </div>



      {selectedItem && (
        <div className="modal-overlay ">
          <div className="modal flex-col w-[300px] md:w-[500px] h-auto">
          
            <p className="pt-[7px]">{selectedItem.name}</p>
            <p className="pt-[7px]">{selectedItem.date}</p>
            <h1 className="font-bold pt-[7px]">{selectedItem.subject}</h1>
            <p className="pt-[7px]">{selectedItem.issue}</p>
            <button onClick={handleEditFormClose} className="mt-[40px] bg-babyBlue text-white w-[150px] ">Close</button>
          </div>
        </div>
      )}

{ issue.length >6? 
    <div className="flex justify-center items-center w-screen fixed bg-gray">
    <button onClick={handlePrevPage} className="bg-darkblue text-white px-4 py-2 mr-2">
      Previous Page
    </button>
    <button onClick={handleNextPage} className="bg-darkblue text-white px-4 py-2">
      Next Page
    </button>
  </div>:
  <div>kll</div>
  }
    </div>
 
  </div>
    );
}

export default Issues;
