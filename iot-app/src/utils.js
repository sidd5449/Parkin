import axios from 'axios';

export const bookSlot = (id) => {
    axios.patch(`http://localhost:3001/book/${id}`);
};

export const userInfo = 
    {
        name: 'Siddhesh Thakare',
        regNo: 'MH-12 BG-5449', 
    }