import { Table } from "antd"
import { useState } from "react";
import { useEffect } from "react";

export function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState([false])

    const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },

    {
        title: 'Titulo',
        dataIndex: 'title',
        key: 'title',
    }

];

    useEffect(() => {
        async function fetchpost() {

            setLoading(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json()

            setLoading(false)
            setPosts(data)

        }

        fetchpost()
    }, [])

    return <div>
        
        <h1>Posts</h1>
        <Table rowKey="id" columns={columns} dataSource={posts} loading={loading}/>
        
        </div>
}