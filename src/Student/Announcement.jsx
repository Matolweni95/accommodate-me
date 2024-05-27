

import { useState } from "react";
import { Link } from "react-router-dom";
import news from '../assets/969258-liveupdates.webp'
import { FaRegCalendarAlt } from "react-icons/fa";


const dataArray = Array.from({ length: 20 }, (_, index) => ({ id: index + 1, content: `Item ${index + 1}` }));




const Announcement = () => {
    const [issue, setIssue] = useState([
        {subject: "Student welcome party",  date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Residence Registration", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Student Bash", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Food parcels",  date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Maintenance issue ",  date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Urgent Meeting",  date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Student welcome party",  date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Student welcome party",  date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        {subject: "Student welcome party",  date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
       // {subject: "Student welcome party",  date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
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
           <div className="flex flex-col justify-center items-center w-full">
            <h1 className="font-bold p-5 text-[25px] md:text-[30px]">Latest News</h1>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 p-4 h-auto">
        {currentPageData.map((item, i) => (
          <div key={i} className="bg-white border-2 border-lightgray rounded-md h-auto announcement">

            {/* <img src={news} style={{}} className="rounded-md"/> */}
            <h1 className="m-[10px]  text-dark-purple text-[25px] md:text-[30px]">{item.subject}</h1>
           
              <p className="ml-[10px] pb-[20px] flex flex-row"><span className="text-[15px] pt-[3px] pr-[3px]"><FaRegCalendarAlt /> </span>{item.date}</p>
            <p className="ml-[10px] pb-[20px]">{renderContent(item.issue)}</p>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 ">
            
            <button onClick={() => handleMoreClick(item)} className="bg-lightblue w-[120px] m-[10px] float-end rounded-md text-white">
              Read
            </button>
            </div>
          </div>
        ))}
      </div>



      {selectedItem && (
        <div className="modal-overlay ">
          <div className="modal flex-col w-[300px] md:w-[600px] h-auto">
          
            
            <p className="pt-[7px]">{selectedItem.date}</p>
            <h1 className="font-bold pt-[7px]">{selectedItem.subject}</h1>
            <p className="pt-[7px]">{selectedItem.issue}</p>
            <button onClick={handleEditFormClose} className="mt-[40px] bg-babyBlue text-white w-[150px] ">Close</button>
          </div>
        </div>
      )}

{ issue.length >6? 
    <div className="flex w-full m-[20px]  ">
    <button onClick={handlePrevPage} className="bg-darkblue text-white px-4 py-2  ml-[80px]  md:ml-[430px] rounded-md">
      Back
    </button>
    <p className="p-[10px]">{currentPage}</p>
    <button onClick={handleNextPage} className="bg-darkblue text-white px-4 py-2  rounded-md">
      Next
    </button>
  </div>:
  <div></div>
  }
    </div>
 
  </div>
    );
}

export default Announcement;
