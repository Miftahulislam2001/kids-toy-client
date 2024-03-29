import  { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { useAuthGlobally } from "../Context/AuthProvider";


const Tabss = () => {
    const { user } = useAuthGlobally();

    const [tabIndex, setTabIndex] = useState(2);
    const [subCategory, setSubCategory] = useState("Baby_Doll_toy");
    const [tab, setTab] = useState([])



    useEffect(() => {
        fetch(`https://girls-toys.vercel.app/tabs?sub_category=${subCategory}`)
            .then(res => res.json())
            .then(data => setTab(data))
    }, [subCategory])

    const handleSubCategory = (sub) => {
        setSubCategory(sub)
    }

    const handelTost = () => {

        if (!user) {
            toast.error("You Have To Login First To View Details");

        }
    }

    return (
        <Tabs
            className="max-w-[1240px] mx-auto text-center"
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
        >
            <TabList>
                <Tab onClick={() => handleSubCategory("American_Doll_toy")}>American Doll toy</Tab>
                <Tab onClick={() => handleSubCategory("Barbie_Doll_toy")}>Barbie Doll toy</Tab>
                <Tab onClick={() => handleSubCategory("Baby_Doll_toy")}>Baby Doll toy</Tab>
            </TabList>
            <TabPanel>
                <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-10 mt-10 p-4">
                    {
                        tab.map((tab) => <><div  key={tab._id} className="border rounded-md shadow ">
                            <img className=" mx-auto h-96 object-cover rounded-md border p-5" src={tab.photo_url} alt="" />
                            <div className="">
                                <h1 className="text-xl mt-6">Name: <span className="font-semibold">{tab.name}</span></h1>
                                <p className="my-2">Price: {tab.price}</p>
                                <div className='my-2 flex items-center justify-center gap-2'>
                                    <span>{tab.rating}</span> <Rating style={{ maxWidth: 120 }} value={tab.rating} readOnly />
                                </div>
                                <button onClick={handelTost} className="bg-[#B2A4FF] hover:bg-[#AA77FF] my-4 mb-6 px-6 py-2 rounded text-white"><Link to={`/view-details/${tab._id}`}>View Details</Link></button>
                            </div>
                        </div></>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-4 mt-10 p-4">
                    {
                        tab.map((tab) => <><div  key={tab._id} className="border rounded-md shadow">
                            <img className="mx-auto h-96 object-cover rounded-md border p-5" src={tab.photo_url} alt="" />
                            <div>
                                <h1 className="text-xl mt-6">Name: <span className="font-semibold">{tab.name}</span></h1>
                                <p className="my-2">Price: {tab.price}</p>
                                <div className='my-2 flex items-center justify-center gap-2'>
                                    <span>{tab.rating}</span> <Rating style={{ maxWidth: 120 }} value={tab.rating} readOnly />
                                </div>
                            </div>
                            <button onClick={handelTost} className="bg-[#FFB6C6] hover:bg-[#AA77FF] my-4 mb-6 px-6 py-2 rounded text-white"><Link to={`/view-details/${tab._id}`}>View Details</Link></button>
                        </div></>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-4 mt-10">
                    {
                        tab.map((tab) => <><div  key={tab._id} className="border rounded-md shadow">
                            <img className="mx-auto h-96 object-cover rounded-md border p-5" src={tab.photo_url} alt="" />
                            <div>
                                <h1 className="text-xl mt-6">Name: <span className="font-semibold">{tab.name}</span></h1>
                                <p className="my-2">Price: {tab.price}</p>
                                <div className='my-2 flex items-center justify-center gap-2'>
                                    <span>{tab.rating}</span> <Rating style={{ maxWidth: 120 }} value={tab.rating} readOnly />
                                </div>
                            </div>
                            <button onClick={handelTost} className="bg-[#FFB6C6]  my-4 mb-6 px-6 py-2 rounded text-white"><Link to={`/view-details/${tab._id}`}>View Details</Link></button>
                        </div></>)
                    }
                </div>
            </TabPanel>

        </Tabs>
    );
};
export default Tabss;