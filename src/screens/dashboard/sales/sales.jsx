import OverviewCard from '../overview/card';
const Sales = () => {

    return (
        <div className='col-12 d-flex justify-content-between '>
            <OverviewCard bgColor="#ff9d07" className="col-4" value="10,000" label="Deals Count"/>
            <OverviewCard bgColor="#45926b" className="col-4" value="10,000" label="Deals Value"/>
            <OverviewCard bgColor="#2f8bcc" className="col-4" value="10,000" label="Conversion rate"/>
        </div>
    );
}

export default Sales;
