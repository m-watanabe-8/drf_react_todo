import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const ProtectedPage = () => {
    const [data, setData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token')
            
            if (!token) {
                alert('ログインしてください')
                return
            }

            const response = await fetch('http://localhost:8000/api/todo/', {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,
                },
            })

            if (response.ok) {
                const data = await response.json()
                setData(data)
                navigate('/todo')
            } else {
                alert('アクセス拒否されました')
                return
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
    <div>
        <h1>ログインしています</h1>
        {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
            <p>読み込み中...</p>
        )}
    </div>
    );
};

export default ProtectedPage;
