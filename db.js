import conn from './conn.js';


export async function getAllPosts() {
    try {
        const result = await conn.query('SELECT * FROM blogs');
        return result.rows;  
    } catch (e) {
        console.error("Error al obtener todos los posts:", e);
        throw e;  
    }
}


export async function GetPostID(id) {
    try {
        const result = await conn.query('SELECT * FROM blogs WHERE id = $1', [id]);  
        return result.rows;  
    } catch (e) {
        console.error("Error al obtener el post por ID:", e);
        throw e;
    }
}


export async function createPost(title, content, image_data) {
    try {
        const result = await conn.query('INSERT INTO blogs (title, content, image_data) VALUES ($1, $2, $3) RETURNING *', [title, content, image_data]);
        return result.rows[0];  
    } catch (e) {
        console.error("Error al crear un post:", e);
        throw e;
    }
}


export async function deletePost(id) {
    try {
        const result = await conn.query('DELETE FROM blogs WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];  
    } catch (e) {
        console.error("Error al eliminar el post:", e);
        throw e;
    }
}


export async function putpost(id, title, content, image_data) {
    try {
        const result = await conn.query('UPDATE blogs SET title = $1, content = $2, image_data = $3 WHERE id = $4 RETURNING *', [title, content, image_data, id]);
        return result.rows[0];  
    } catch (e) {
        console.error("Error al actualizar el post:", e);
        throw e;
    }
}
