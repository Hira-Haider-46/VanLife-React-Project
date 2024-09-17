function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    try {
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(creds),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data)
        if (!res.ok) {
            console.log("1st err")
            throw {
                message: data.message || "An error occurred",
                statusText: res.statusText,
                status: res.status
            };
        }
        console.log("no err")
        return data;
    } catch (error) {
        console.error('Error in loginUser:', error);
        throw {

            message: error.message || "An unexpected error occurred",
            statusText: error.statusText,
            status: error.status
        };
    }
}