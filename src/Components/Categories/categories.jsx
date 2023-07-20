import categories from '../../Mocks/categories.json';



const Categories = () => {
    
   const { data, loading } = useMockData(categories)

    if (loading) return (<div className='spinner-container'><CircularProgress sx={{ color: "#FF627E" }} /></div>)

    return (<>
        <div className='container'>
            
        </div>

    </>);
   

};

export default Categories;


