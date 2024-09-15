import React from 'react';
import { useParams, Link, Outlet } from "react-router-dom";

function HostVanDetails() {

    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }
    
    return (
        <section>
            <div className="host-van-detail-layout-container">
                <Link
                    to=".." relative='path' style={{color: 'black', textDecoration: 'none'}}
                >&larr; <span style={{textDecoration: 'underline'}}>Back to all vans</span></Link>
                <div className="host-van-detail" style={{marginTop: '20px'}}>
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HostVanDetails;