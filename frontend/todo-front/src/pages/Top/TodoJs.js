const originUrl = new URL('http://localhost:8000/api/todo/');

// データ一覧の取得
export const getTodoList = (() => {
    const url = new URL('/api/todo/', originUrl);
    return new Promise( (resolve, reject) => {
        fetch(url.href)
        .then( res => res.json() )
        .then( json => resolve(json) )
        .catch( () => reject([]) );
    });
});

// 新規作成データの登録
export const createTodoList = ((todo) => {
    const url = new URL('/api/todo/', originUrl);
    return new Promise( (resolve, reject) => {
        fetch(url.href,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        })
        .then( res => res.json() )
        .then( json => resolve(json) )
    });
});

// 更新
export const updateTodoList = ((id, todo) => {
    const url = new URL(`/api/todo/${id}/`, originUrl);
    return new Promise( (resolve, reject) => {
        fetch(url.href,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        })
        .then( res => res.json() )
        .then( json => resolve(json) )
    });
});

// 削除
export const deleteTodoList = ((id, todo) => {
    const url = new URL(`/api/todo/${id}/`, originUrl);
    fetch(url.href,{method: "DELETE"})
});
