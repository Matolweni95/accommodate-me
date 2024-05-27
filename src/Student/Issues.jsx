import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";


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
       // {subject: "Broken window", name: "Cynthia Dladla", date: "01 January 2024", issue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
    ]);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editedItem, setEditedItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [issues,setIssues] = useState([]);
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const handleMoreClick = (item) => {
      setSelectedItem(item);
    };
  

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6; 
    const totalPages = Math.ceil(issue.length / pageSize);

    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    const currentPageData = issues.slice(startIdx, endIdx);

    const editNavigation=(id)=>{

      navigate(`/issues/report/${id}`)
    }
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
    
      useEffect(()=>{
  
        const fetch = async()=>{
        
          const response = await axios.get(`http://localhost:8080/auth/getAllIssues/2`)

          setIssues(response.data);
        }

      fetch()
      },[])

      const handleUpdateSolved= async (id)=>{

        console.log(id)
        try {
          const response = await axios.patch(`http://localhost:8080/auth/issue/${id}/status`, 
            { status: "Solved" }
         
          );
          setMessage(`Status updated successfully: ${response.data.status}`);
        } catch (error) {
          setMessage(`Error updating status: ${error.response ? error.response.data.message : error.message}`);
        }

      }


    return (
        <div>
        <div>
           <Link to={'report/:id'}> <button className="bg-transparent border border-lightblue py-1 px-2 rounded w-[200px] m-[20px] ">Add</button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 p-4 h-auto">
        {currentPageData.map((item, i) => (
          <div key={i} className="bg-white border-2 border-lightgray  rounded-md h-[270px]">
            <h1 className="m-[10px] font-bold text-darkblue">{item.title}</h1>
            <h1 className="ml-[10px] pb-[10px]">{item.fullName}</h1>
            <div className="flex " >
            <p className="ml-[10px] pb-[10px]">01 January 2024</p>
            <p className="flex ml-[55px] text-lightgreen text-[15px]">• {item.status}</p>
            </div>
            <p className="ml-[10px] pb-[20px]">{renderContent(item.description)}</p>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 ">
            <button onClick={() => editNavigation(item.issuesId)} className="bg-darkblue w-[140px] m-[10px] rounded-md text-white">
              Edit
            </button>
            <button onClick={() => handleMoreClick(item)} className="bg-lightblue w-[140px] m-[10px] float-end rounded-md text-white">
              More
            </button>
            </div>
          </div>
        ))}
      </div>



      {selectedItem && (
        <div className="modal-overlay ">
          <div className="modal flex-col w-[300px] md:w-[500px] h-auto">
          <button onClick={handleEditFormClose} className="flex flex-row font-bold py-2 float-end"><IoMdClose /></button>
            <p className="pt-[7px]">{selectedItem.fullName}</p>
            <p className="pt-[7px]">{"01 January 2024"}</p>
            <h1 className="font-bold pt-[7px] text-red">{selectedItem.title}</h1>
            <p className="pt-[7px]">{selectedItem.description}</p>
            <button onClick={()=>{handleUpdateSolved(selectedItem.issuesId)}} className="mt-[40px] bg-babyBlue text-white w-[150px] ">Solved</button>
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

export default Issues;
