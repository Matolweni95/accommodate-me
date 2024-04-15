import React from 'react';
import SideNav from './TempSideNav';
import classNames from 'classnames';

function AdminIssueView() {
    const data = [
        { title: 'Issue 1', label: 'High', description: 'Description 1', status: 'Reported', dateReported: '2024-03-15', dateClosed: '2024-03-20' },
        { title: 'Issue 2', label: 'Low', description: 'Description 2', status: 'Resolved', dateReported: '2024-03-16', dateClosed: '2024-03-22' },
        { title: 'Issue 3', label: 'Medium', description: 'Description 3', status: 'In Progress', dateReported: '2024-03-17', dateClosed: '2024-03-25' },
        { title: 'Issue 4', label: 'Medium', description: 'Description 3', status: 'In Progress', dateReported: '2024-03-17', dateClosed: '2024-03-25' },
        { title: 'Issue 5', label: 'Low', description: 'Description 3', status: 'In Progress', dateReported: '2024-03-17', dateClosed: '2024-03-25' },
        { title: 'Issue 6', label: 'Medium', description: 'Description 3', status: 'In Progress', dateReported: '2024-03-17', dateClosed: '2024-03-25' },
        { title: 'Issue 7', label: 'High', description: 'Description 3', status: 'In Progress', dateReported: '2024-03-17', dateClosed: '2024-03-25' },
        { title: 'Issue 8', label: 'Medium', description: 'Description 3', status: 'In Progress', dateReported: '2024-03-17', dateClosed: '2024-03-25' },

    ];

    return (
        <div>
            <SideNav>
                <table className='w-full'>
                    <thead className=''>
                        <tr className='pb-5 text-white'>
                            <th className='p-3 bg-darkblue rounded-tl-[0.5rem] rounded-bl-[0.5rem]'>Title</th>
                            <th className='p-3 bg-darkblue'>Label</th>
                            <th className='p-3 bg-darkblue'>Description</th>
                            <th className='p-3 bg-darkblue'>Status</th>
                            <th className='p-3 bg-darkblue'>Date Reported</th>
                            <th className='p-3 bg-darkblue'>Date Closed</th>
                            <th className='p-3 bg-darkblue rounded-tr-[0.5rem] rounded-br-[0.5rem]'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className='pt-6'>{item.title}</td>
                                <td className='pt-6'><div className={`${getClassNamesForLabel(item.label)} flex items-center justify-center p-2`}>{item.label}</div></td>
                                <td className='pt-6'>{item.description}</td>
                                <td className='pt-6'>{item.status}</td>
                                <td className='pt-6'>{item.dateReported}</td>
                                <td className='pt-6'>{item.dateClosed}</td>
                                <td>
                                    <button className='pt-6' onClick={() => handleAction(item)}>Action</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </SideNav>
        </div>
    );
}

const getClassNamesForLabel = (label) => {
    return classNames(' rounded-[10px]', {
        'bg-green': label === 'Low',
        'bg-yellow': label === 'Medium',
        'bg-red': label === 'High',
    });
};

const handleAction = (item) => {
    console.log('Action clicked for:', item);
};

export default AdminIssueView;
