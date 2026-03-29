import { useState, useEffect } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json()) 
            .then(data => {
                const incomplete = data.filter(todo => !todo.completed);
                setTodos(incomplete);
                setLoading(false);       
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center py-10 text-xl">Loading...</p>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                Incomplete Todos ({todos.length})
            </h1>

            <div className="space-y-3">
                {todos.map((todo) => (
                    <div 
                        key={todo.id} 
                        className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
                    >
                        <p className="text-lg">{todo.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;