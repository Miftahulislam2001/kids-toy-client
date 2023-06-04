import  { useEffect, useState } from 'react';
import useTitle from '../../Hook/useHook';
import SingleToy from '../../Components/SingleToy';


const AllToys = () => {

    useTitle('All-Toys')

    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('https://girls-toys.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])

    const search = (e) => {
        e.preventDefault()

        fetch(`https://girls-toys.vercel.app/search?query=${e.target.search.value}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }


    return (
        <div className='container my-12'>

            <form onSubmit={search} className='overflow-hidden relative my-10 px-5 shadow h-[50px] mx-w-[500px] min-w-[280px] rounded-full mx-auto'>
                <input type="search" name="search" id="" placeholder='search' className='placeholder:text-lg h-full rounded-full border-2 border-red-100 shadow-2xl  w-full px-10' />
                <input type="submit" value="search" className='bg-[#FFB6C6]  w-[90px] flex justify-between items-center text-center absolute right-0 top-0 h-full px-3 text-white' />
            </form>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full min-w-[900px]">
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>ToyS Name</th>
                            <th>sub-category</th>
                            <th>price</th>
                            <th>Available Quantity</th>
                            <th>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map((singleToy) => <SingleToy key={singleToy._id} singleToy={singleToy} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;