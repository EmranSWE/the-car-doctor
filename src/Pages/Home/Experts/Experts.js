import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import Expert from '../Expert/Expert';
const experts =[
    {id:1,name:'Will smith',img:expert1},
    {id:2,name:'Jack smith',img:expert2},
    {id:3,name:'Mary smith',img:expert3},
    {id:4,name:'King smith',img:expert4},
    {id:5,name:'Abrar smith',img:expert5}
]
const Experts = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h2 className='text-primary text-center'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert id={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;