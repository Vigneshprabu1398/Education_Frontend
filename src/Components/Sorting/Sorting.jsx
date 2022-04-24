import './Sorting.css'

export const SortAndFilterButtons = ({handleSort})=>{
    return (
            <div>
                <button className="asc"
                onClick={() => handleSort("student_name", 1)}>Asc Name</button>
                <button className="dec"
                onClick={() => handleSort("student_name", -1)}>Des Name</button>
            </div>
    )
}